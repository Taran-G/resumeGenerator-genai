
<div align="center">

# 📄 Resume-GenAI

### AI-Powered Resume Generator & Interview Planner

A **full-stack web application** that uses **Google Gemini GenAI** to generate professional, structured resumes and interview reports. Upload your existing resume, let the AI analyze it, and receive a beautifully formatted, downloadable PDF — all secured behind a robust JWT authentication system.

<br/>

[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Google Gemini](https://img.shields.io/badge/Google-Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

</div>

---

## 📸 Overview

Resume-GenAI takes the pain out of resume building. Users upload their existing resume (PDF), the backend parses the text, sends it to **Google Gemini** with a strict **structured schema**, and returns polished resume content rendered in HTML. **Puppeteer** then converts that HTML into a pixel-perfect, downloadable PDF resume.

<img width="1862" height="1080" alt="Image" src="https://github.com/user-attachments/assets/ef36cda6-83f1-49a7-a40c-8566777ed227" />
<img width="1884" height="1080" alt="Image" src="https://github.com/user-attachments/assets/0b0139af-bc5e-4034-a0ca-2284860ec966" />
<img width="1844" height="1079" alt="Image" src="https://github.com/user-attachments/assets/f6d225f1-cdaa-40c4-a7eb-4311c289a2be" />
<img width="1847" height="1080" alt="Image" src="https://github.com/user-attachments/assets/04f9b76b-af9a-4efd-8ccd-79d57040a880" />
<img width="1870" height="1078" alt="Image" src="https://github.com/user-attachments/assets/e389586a-11b0-4ef0-b0c7-99a6a77b1e41" />

## ✨ Features

### 🤖 AI & Document Processing
- **Gemini GenAI Integration** — Structured schema-based prompting for consistent, professional resume output
- **PDF Parsing** — Extracts raw text from uploaded resume PDFs using `pdf-parse`
- **Multer Buffer Uploads** — In-memory file handling via `multer` (no disk writes needed)
- **Puppeteer PDF Export** — Converts AI-generated HTML output into a downloadable PDF resume
- **Interview Report Generation** — AI-powered interview analysis and structured feedback

### 🔐 Authentication & Security
- **JWT Access & Refresh Tokens** — Secure, stateless session management via HTTP-only cookies
- **Token Blacklisting** — Revoked tokens stored in MongoDB to prevent reuse after logout
- **bcrypt Password Hashing** — Industry-standard password hashing with salt rounds
- **Protected Routes** — Middleware-guarded API endpoints and frontend route guards
- **Zod Schema Validation** — Runtime request validation on all API inputs

### 🎨 Frontend
- **React + Vite** — Fast, modern frontend tooling
- **Feature-Based Architecture** — Auth and Interview-AI are fully isolated feature modules
- **React Context API** — Global state for authentication and interview sessions
- **SCSS Styling** — Modular stylesheets per feature and component
- **React Router** — Client-side routing with protected route wrappers

---

## 🗂 Project Structure

```
RESUME-GENAI/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js                 # MongoDB connection setup
│   │   ├── controller/
│   │   │   ├── interview.controller.js     # Interview generation & report logic
│   │   │   └── user.controller.js          # Register, login, logout, refresh
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js          # JWT verification & route protection
│   │   │   └── file.middleware.js          # Multer config for PDF buffer uploads
│   │   ├── model/
│   │   │   ├── blacklist.model.js          # Blacklisted JWT tokens (MongoDB)
│   │   │   ├── interviewReport.model.js    # Saved AI-generated interview reports
│   │   │   └── user.model.js               # User schema with bcrypt hashed passwords
│   │   ├── routes/
│   │   │   ├── interview.routes.js         # /api/interview route definitions
│   │   │   └── user.routes.js              # /api/user route definitions
│   │   ├── services/
│   │   │   └── ai.service.js               # Gemini API calls & structured schema logic
│   │   └── app.js                          # Express app, middleware & route mounting
│   ├── .env                                # Environment variables (not committed)
│   ├── .gitignore
│   ├── package.json
│   └── server.js                           # Server entry point
│
└── Frontend/
    ├── public/
    ├── src/
    │   ├── assets/                         # Static images & icons
    │   ├── features/
    │   │   ├── auth/                       # ── Authentication Feature Module ──
    │   │   │   ├── components/
    │   │   │   │   └── protected.jsx       # Protected route wrapper component
    │   │   │   ├── hooks/
    │   │   │   │   └── useAuth.js          # Custom hook for auth state & actions
    │   │   │   ├── pages/
    │   │   │   │   ├── login.jsx           # Login page
    │   │   │   │   └── register.jsx        # Registration page
    │   │   │   ├── services/
    │   │   │   │   └── auth.api.js         # Axios calls to auth endpoints
    │   │   │   ├── auth.context.jsx        # Auth context provider
    │   │   │   └── auth.form.scss          # Auth form styles
    │   │   │
    │   │   └── interview-ai/               # ── AI Interview Feature Module ──
    │   │       ├── hooks/
    │   │       │   └── useInterview.js     # Custom hook for interview state
    │   │       ├── pages/
    │   │       │   ├── Home.jsx            # Dashboard / landing page
    │   │       │   └── interview.jsx       # AI resume generation & interview page
    │   │       ├── services/
    │   │       │   └── interview.api.js    # Axios calls to interview endpoints
    │   │       ├── style/
    │   │       │   ├── home.scss
    │   │       │   └── interview.scss
    │   │       └── interview.context.jsx   # Interview context provider
    │   │
    │   ├── style/
    │   │   └── button.scss                 # Shared button styles
    │   ├── App.jsx                         # Root component
    │   ├── app.routes.jsx                  # Application route definitions
    │   ├── index.scss                      # Global styles
    │   └── main.jsx                        # React DOM entry point
    ├── index.html
    ├── vite.config.js
    ├── eslint.config.js
    └── package.json
```

---

## 🛠 Tech Stack

### Backend
| Technology | Purpose |
|---|---|
| **Node.js + Express** | REST API server |
| **MongoDB + Mongoose** | Database & ODM |
| **Google Gemini AI** | Resume & interview content generation with structured schema |
| **Puppeteer** | Headless browser — converts AI HTML output to downloadable PDF |
| **pdf-parse** | Extracts text from user-uploaded PDF resumes |
| **Multer** | In-memory file upload buffer middleware |
| **JWT (jsonwebtoken)** | Access & refresh token generation and verification |
| **bcrypt** | Secure password hashing with salt rounds |
| **Zod** | Runtime API request schema validation |
| **Cookie-Parser** | HTTP-only cookie handling for tokens |

### Frontend
| Technology | Purpose |
|---|---|
| **React 18 + Vite** | UI framework & build tool |
| **React Router v6** | Client-side routing & protected routes |
| **Context API** | Global auth & interview state management |
| **Axios** | HTTP client with interceptors for API calls |
| **SCSS (Sass)** | Modular, maintainable component styling |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `v18+`
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas)
- [Google Gemini API Key](https://ai.google.dev/)

---

### 1. Clone the Repository

```bash
git clone https://github.com/Taran-G/resumeGenerator-genai.git
cd resumeGenerator-genai
```

---

### 2. Set Up the Backend

```bash
cd Backend
npm install
```

Create your `.env` file in the `Backend/` root:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/resume-genai

# JWT
JWT_ACCESS_SECRET=your_strong_access_secret_here
JWT_REFRESH_SECRET=your_strong_refresh_secret_here
JWT_ACCESS_EXPIRES=15m
JWT_REFRESH_EXPIRES=7d

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key_here

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run dev     # development with nodemon
# or
npm start       # production
```

> Backend runs at `http://localhost:5000`

---

### 3. Set Up the Frontend

```bash
cd ../Frontend
npm install
npm run dev
```

> Frontend runs at `http://localhost:5173`

---

## 🔌 API Reference

### Auth Endpoints — `/api/user`

| Method | Endpoint | Description | Protected |
|---|---|---|---|
| `POST` | `/register` | Register a new user | ❌ |
| `POST` | `/login` | Login & receive JWT cookies | ❌ |
| `POST` | `/logout` | Logout & blacklist refresh token | ✅ |
| `POST` | `/refresh` | Issue new access token via refresh token | ✅ |

### Interview & Resume Endpoints — `/api/interview`

| Method | Endpoint | Description | Protected |
|---|---|---|---|
| `POST` | `/generate` | Upload PDF → parse → Gemini AI → structured resume | ✅ |
| `GET` | `/report` | Retrieve saved interview reports | ✅ |
| `GET` | `/download` | Download AI-generated resume as a PDF file | ✅ |

---

## 🔐 Authentication Flow

```
Register  →  bcrypt hashes password  →  user saved to MongoDB

Login     →  password verified  →  JWT access token (15m) + refresh token (7d)
                                    set as HTTP-only cookies

Request   →  auth.middleware.js verifies access token on every protected route

Expired   →  client calls /refresh  →  new access token issued (if refresh valid)

Logout    →  refresh token added to blacklist.model.js  →  cookies cleared
             (blacklisted tokens rejected on all future requests)
```

---

## 🤖 AI Resume Generation Flow

```
1. User uploads their current resume (PDF file)
2. file.middleware.js (Multer) captures it as an in-memory buffer
3. pdf-parse reads the buffer and extracts raw text content
4. ai.service.js builds a structured Gemini prompt with a defined JSON schema
5. Gemini returns a validated, structured resume data object
6. The structured data is injected into an HTML resume template
7. Puppeteer launches a headless browser, renders the HTML, and exports a PDF
8. The PDF is streamed back to the client as a file download
```

---

## 📂 Environment Variables

| Variable | Description | Required |
|---|---|---|
| `PORT` | Backend server port | ✅ |
| `MONGO_URI` | MongoDB connection string | ✅ |
| `JWT_ACCESS_SECRET` | Secret for signing access tokens | ✅ |
| `JWT_REFRESH_SECRET` | Secret for signing refresh tokens | ✅ |
| `JWT_ACCESS_EXPIRES` | Access token expiry (e.g. `15m`) | ✅ |
| `JWT_REFRESH_EXPIRES` | Refresh token expiry (e.g. `7d`) | ✅ |
| `GEMINI_API_KEY` | Google Gemini API key | ✅ |
| `CLIENT_URL` | Frontend origin URL for CORS | ✅ |

> ⚠️ **Never commit your `.env` file.** It is listed in `.gitignore` by default.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: describe your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Taran-G](https://github.com/Taran-G)**

*Powered by Google Gemini AI · Node.js · React · MongoDB*

</div>
