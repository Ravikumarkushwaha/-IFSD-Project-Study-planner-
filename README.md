🎓 Study Planner – Project Overview
💡 Concept

The Study Planner is a MERN stack application that helps users plan, schedule, and manage their study tasks efficiently.
It’s a full-stack web app that includes authentication (login/signup), JWT-based security, and a task management dashboard.

⚙️ Main Functionalities Implemented
🔐 Authentication System (Frontend + Backend)

✅ User Signup

Users can register with their name, email, and password.

Passwords are hashed using bcryptjs before saving to MongoDB.

On registration, a JWT token is generated and returned.

✅ User Login

Users can log in using email & password.

A valid token is generated on success.

Token allows access to protected routes (like the Dashboard).

✅ Protected Routes (Frontend)

The Dashboard page is accessible only after login.

Used ProtectedRoute.jsx to verify token authentication.

✅ Persistent Login

User info and token are stored in localStorage.

Auto-redirect to Dashboard if already logged in.

📅 Task Management Dashboard

✅ Add New Tasks

Each task includes:

Title

Description

Deadline (Date)

✅ View All Tasks

Displays all tasks from MongoDB using API calls (/api/tasks).

✅ Update Task Status

Users can mark a task as completed or undo it.

Changes are reflected instantly (via PUT API).

✅ Delete Tasks

Users can delete unwanted tasks with a single click.

✅ Fully Responsive UI

Centered dashboard with gradient backgrounds.

White task container for better readability.

Consistent modern styling using inline CSS.

🧠 Frontend (Vite + React)

Built using Vite (React 18) for fast development.

Includes pages:

Home.jsx → Landing page (Login / Signup links)

Login.jsx → User authentication form

Signup.jsx → New user registration form

Dashboard.jsx → Main task management page

AuthContext.jsx → Manages user state & JWT token globally.

ProtectedRoute.jsx → Ensures authentication before dashboard access.

api.js → Centralized Axios API service for backend requests.

⚙️ Backend (Node.js + Express + MongoDB)

authRoutes.js – Handles /register and /login

taskRoutes.js – Handles /tasks CRUD APIs

authMiddleware.js – Verifies JWT for protected routes

generateToken.js – Generates 7-day valid tokens

User.js & Task.js – Mongoose models

db.js – MongoDB connection using Mongoose

server.js – Express server setup with routes & CORS

Securely stores user credentials and task data in MongoDB Atlas.

🧾 Backend API Summary
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login user & get token
GET	/api/tasks	Get all tasks (protected)
POST	/api/tasks	Add new task
PUT	/api/tasks/:id	Mark task complete/undo
DELETE	/api/tasks/:id	Delete task
🧩 Technologies Used
Category	Tools/Frameworks
Frontend	React (Vite), Axios
Backend	Node.js, Express.js
Database	MongoDB + Mongoose
Authentication	JSON Web Token (JWT), bcryptjs
Utilities	dotenv, CORS, nodemon 

fullstack-auth-app/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── utils/
│   │   └── generateToken.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
└── frontend/
    ├── public/
    │   └── vite.svg
    ├── index.html        
    ├── src/
    │   ├── components/
    │   │   └── ProtectedRoute.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Login.jsx
    │   │   ├── Signup.jsx
    │   │   └── Dashboard.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── vite.config.js
    ├── package.json
    ├── package-lock.json
    └── README.md


🧱 Setup & Run Commands
# Step 1: Run Backend
cd backend
npm install
npm run dev

# Step 2: Run Frontend
cd ../frontend
npm install
npm run dev

➡️ Then open your browser at http://localhost:5174

👨‍💻 Author
Ravi
Email: Ravins1956@gmail.com

🔗 GitHub: https://github.com/Ravikumarkushwaha 