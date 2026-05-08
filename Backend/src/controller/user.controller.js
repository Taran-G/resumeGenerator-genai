const userModel = require("../model/user.model")
const blacklistModel = require("../model/blacklist.model")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const registerUserController = async (req,res)=>{
const {username,email,password} = req.body 
if(!username || !email || !password){
    return res.status(400).json({
        message:"please enter details"
    })
}
const findUser = await userModel.findOne({
    $or: [{username},{email}]}
)
if(findUser){
    return res.status(400).json({
        message:"user alerady exists"
    })

}
const pashash = await bcrypt.hash(password,10)

const user = await userModel.create({
    username,
    email,
    password:pashash
})
console.log(user)
const token = jwt.sign({
    id: user._id,

    username:user.username
},process.env.JWT_SECRET,{
    expiresIn:'1h'
})
res.cookie('token',token)
return res.status(200).json({
    message:"user created in database",
    user:{
        id:user._id,
        username:user.username,
        email:user.email
    }
    
})

}
const loginUserController = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login body:", req.body);
console.log("Email received:", email);

  if (!email || !password) {
    return res.status(400).json({
      message: "please enter email and password",
    });
  }

  const checkdatabase = await userModel.findOne({ email });

console.log("USER FOUND:", checkdatabase)

  if (!checkdatabase) {
    return res.status(400).json({
      message: "no user found",
    });
  }

  const comparePass = await bcrypt.compare(password, checkdatabase.password);

  if (!comparePass) {
    return res.status(400).json({
      message: "invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: checkdatabase._id,
      username: checkdatabase.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });

  return res.status(200).json({
    message: "user logged in successfully",
    user: {
      id: checkdatabase._id,
      username: checkdatabase.username,
      email: checkdatabase.email,
    },
  });
};
const logoutUserController = async (req,res)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(400).json({
            message:"no token"
        })
    }
    console.log(token)
    
    await blacklistModel.create({token})
    res.clearCookie('token')

    return res.status(200).json({
        message:"user logged out successfully"
    })

}

const getMeController = async (req, res) => {
  const user = await userModel.findById(req.user.id);

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  return res.status(200).json({
    message: "user detail fetched successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
};
module.exports = {registerUserController, loginUserController, logoutUserController,getMeController}