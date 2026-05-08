import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import Loader from "./button";

 const Protected = ({children})=>{
    const{loading,user} = useAuth()
    

    if(loading){
        return(
            <main><Loader /></main>
        )
    }
    if(!user){
        return(
            <Navigate to= {'/login'}></Navigate>
        )
    }
    return children
}
export default Protected
