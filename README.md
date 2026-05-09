<div align="center">

# 🚀 InterviewPrep AI

### AI-Powered Resume Optimizer, Interview Planner & Career Roadmap Generator

<p align="center">
  Upload your resume and target job description to generate an optimized resume, interview preparation questions, and a personalized roadmap to land your dream role.
</p>

<br/>

<p align="center">

<img src="https://img.shields.io/badge/AI-Powered-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/Resume-Optimization-success?style=for-the-badge" />
<img src="https://img.shields.io/badge/Technical-Interview_Preparation-orange?style=for-the-badge" />
<img src="https://img.shields.io/badge/Behavioral-Interview_Questions-red?style=for-the-badge" />
<img src="https://img.shields.io/badge/Career-Roadmap-purple?style=for-the-badge" />
<img src="https://img.shields.io/badge/PDF-Resume_Export-black?style=for-the-badge" />

</p>

<br/>

[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-Vite-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Google Gemini](https://img.shields.io/badge/Google-Gemini_AI-4285F4?style=flat-square&logo=google&logoColor=white)](https://ai.google.dev/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Puppeteer](https://img.shields.io/badge/Puppeteer-PDF_Export-40B5A4?style=flat-square&logo=googlechrome&logoColor=white)](https://pptr.dev/)

</div>

---

# 📸 Overview

InterviewPrep AI is a full-stack AI-powered platform that helps users:

- Optimize resumes according to target job descriptions
- Generate technical interview questions
- Generate behavioral interview questions
- Understand interviewer intentions
- Learn answer strategies
- Identify skill gaps
- Build a personalized preparation roadmap
- Export professional AI-generated resumes as PDFs

The application uses **Google Gemini AI** with structured schema prompting to generate highly organized and reliable outputs.

The generated resume is dynamically converted into a downloadable PDF using **Puppeteer**.

---

# 🖼️ Screenshots

<img width="1218" height="1060" alt="Image" src="https://github.com/user-attachments/assets/3b88b8f5-ca53-4b32-9dd9-cfe31585736a" />

<img width="1862" height="1080" alt="Image" src="https://github.com/user-attachments/assets/ef36cda6-83f1-49a7-a40c-8566777ed227" />

<img width="1884" height="1080" alt="Image" src="https://github.com/user-attachments/assets/0b0139af-bc5e-4034-a0ca-2284860ec966" />

<img width="1844" height="1079" alt="Image" src="https://github.com/user-attachments/assets/f6d225f1-cdaa-40c4-a7eb-4311c289a2be" />

<img width="1847" height="1080" alt="Image" src="https://github.com/user-attachments/assets/04f9b76b-af9a-4efd-8ccd-79d57040a880" />

<img width="1870" height="1078" alt="Image" src="https://github.com/user-attachments/assets/e389586a-11b0-4ef0-b0c7-99a6a77b1e41" />

---

# ✨ Features

<table>
  <tr>
    <td width="50%">
      <h3>🤖 AI Resume Optimization</h3>
      <p>
        Optimizes resumes according to the target job description and improves resume content for better role alignment.
      </p>
    </td>
    <td width="50%">
      <h3>🎯 Interview Question Generator</h3>
      <p>
        Generates role-specific technical and behavioral interview questions with detailed answer guidance.
      </p>
    </td>
  </tr>

  <tr>
    <td width="50%">
      <h3>🧠 Interview Strategy Analysis</h3>
      <p>
        Explains what interviewers are actually evaluating behind each question.
      </p>
    </td>
    <td width="50%">
      <h3>📈 Career Roadmap Generator</h3>
      <p>
        Creates a personalized preparation roadmap to help users land their target role.
      </p>
    </td>
  </tr>

  <tr>
    <td width="50%">
      <h3>📄 AI PDF Resume Export</h3>
      <p>
        Generates professional downloadable PDF resumes using Puppeteer.
      </p>
    </td>
    <td width="50%">
      <h3>🔐 Authentication & Security</h3>
      <p>
        Uses JWT authentication, HTTP-only cookies, bcrypt hashing, protected routes, and token blacklisting.
      </p>
    </td>
  </tr>
</table>

---

# 🗂️ Project Structure

```bash
INTERVIEWPREP-AI/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── middleware/
│   │   ├── model/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── Frontend/
    ├── src/
    │   ├── assets/
    │   ├── features/
    │   │   ├── auth/
    │   │   └── interview-ai/
    │   │
    │   ├── style/
    │   ├── App.jsx
    │   ├── app.routes.jsx
    │   ├── index.scss
    │   └── main.jsx
    │
    ├── package.json
    └── vite.config.js
```

---

# 🛠️ Tech Stack

## Backend

| Technology | Purpose |
|---|---|
| Node.js + Express | REST API Server |
| MongoDB + Mongoose | Database & ODM |
| Google Gemini AI | Resume & Interview Generation |
| Puppeteer | PDF Generation |
| pdf-parse | Resume Text Extraction |
| Multer | File Upload Handling |
| JWT | Authentication |
| bcrypt | Password Hashing |
| Zod | Runtime Validation |

---

## Frontend

| Technology | Purpose |
|---|---|
| React + Vite | Frontend Framework |
| React Router v6 | Routing |
| Context API | Global State Management |
| Axios | API Communication |
| SCSS | Styling |

---

# 🚀 Getting Started

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Taran-G/resumeGenerator-genai.git

cd resumeGenerator-genai
```

---

# ⚙️ Backend Setup

```bash
cd Backend

npm install
```

Create `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_uri

JWT_ACCESS_SECRET=your_access_secret

JWT_REFRESH_SECRET=your_refresh_secret

JWT_ACCESS_EXPIRES=15m

JWT_REFRESH_EXPIRES=7d

GEMINI_API_KEY=your_gemini_api_key

CLIENT_URL=http://localhost:5173
```

Run Backend:

```bash
npm run dev
```

---

# 💻 Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

---

# 🔌 API Routes

## Authentication Routes

| Method | Route | Description |
|---|---|---|
| POST | `/api/user/register` | Register User |
| POST | `/api/user/login` | Login User |
| POST | `/api/user/logout` | Logout User |
| POST | `/api/user/refresh` | Refresh Access Token |

---

## Interview Routes

| Method | Route | Description |
|---|---|---|
| POST | `/api/interview/generate` | Generate AI Interview Report |
| GET | `/api/interview/report/:id` | Fetch Interview Report |
| GET | `/api/interview/download/:id` | Download Generated PDF |

---

# 🔐 Authentication Flow

```text
Register
   ↓
Password hashed using bcrypt
   ↓
User stored in MongoDB
   ↓
Login generates JWT access & refresh tokens
   ↓
Tokens stored as HTTP-only cookies
   ↓
Protected routes verified using middleware
   ↓
Refresh route generates new access token
   ↓
Logout blacklists refresh token
```

---

# 🤖 AI Generation Flow

```text
1. User uploads resume PDF

2. Multer stores file in memory buffer

3. pdf-parse extracts resume text

4. Gemini AI receives:
   - Resume
   - Self Description
   - Job Description

5. AI generates:
   - Optimized Resume
   - Technical Questions
   - Behavioral Questions
   - Match Score
   - Skill Gaps
   - Career Roadmap

6. HTML template generated dynamically

7. Puppeteer converts HTML into PDF

8. Final report stored in MongoDB
```

---

# 🌍 Environment Variables

| Variable | Description |
|---|---|
| PORT | Backend Port |
| MONGO_URI | MongoDB Connection URI |
| JWT_ACCESS_SECRET | JWT Access Secret |
| JWT_REFRESH_SECRET | JWT Refresh Secret |
| JWT_ACCESS_EXPIRES | Access Token Expiry |
| JWT_REFRESH_EXPIRES | Refresh Token Expiry |
| GEMINI_API_KEY | Google Gemini API Key |
| CLIENT_URL | Frontend URL |

---

# 🤝 Contributing

```bash
1. Fork Repository

2. Create Feature Branch
git checkout -b feature/your-feature

3. Commit Changes
git commit -m "Added new feature"

4. Push Changes
git push origin feature/your-feature

5. Open Pull Request
```

---

# 📜 License

This project is licensed under the MIT License.

---

<div align="center">

## 💙 Built with ❤️ by Taran-G

Powered by Google Gemini AI • React • Node.js • MongoDB

</div>
