# Study Planner

## Project Overview

The **Study Planner** is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that helps users efficiently organize, schedule, and manage their study tasks. The application features secure user authentication, JWT-based authorization, and a responsive task management dashboard for tracking study progress.

---

## Objectives

- Develop a secure full-stack task management application.
- Implement user authentication using JWT.
- Allow users to create, manage, and organize study tasks.
- Provide a responsive and user-friendly interface.
- Demonstrate CRUD operations using the MERN stack.

---

## Technologies Used

| Category | Technologies |
|----------|--------------|
| Frontend | React (Vite), Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JSON Web Token (JWT), bcryptjs |
| Utilities | dotenv, CORS, nodemon |

---

## Features

### Authentication System

The application provides a secure authentication system with the following features:

#### User Registration

- Register using Name, Email, and Password.
- Passwords are securely hashed using **bcryptjs** before storing in MongoDB.
- JWT token is generated after successful registration.

#### User Login

- Login using Email and Password.
- Generates a secure JWT token upon successful authentication.
- Allows access to protected routes.

#### Protected Routes

- Dashboard is accessible only to authenticated users.
- Implemented using `ProtectedRoute.jsx`.

#### Persistent Login

- User information and JWT token are stored in `localStorage`.
- Automatically redirects authenticated users to the Dashboard.

---

## Task Management Dashboard

### Add New Tasks

Users can create study tasks with:

- Title
- Description
- Deadline

### View Tasks

- Displays all tasks stored in MongoDB.
- Retrieves tasks through REST APIs.

### Update Task Status

- Mark tasks as Completed.
- Undo completed tasks.
- Updates are reflected instantly using PUT requests.

### Delete Tasks

- Remove unwanted tasks with a single click.

### Responsive User Interface

- Modern responsive design.
- Gradient background.
- Clean white task cards.
- Consistent styling throughout the application.

---

## Frontend

The frontend is developed using **React (Vite)** and includes the following components:

- **Home.jsx** – Landing page
- **Login.jsx** – User login page
- **Signup.jsx** – User registration page
- **Dashboard.jsx** – Task management dashboard
- **AuthContext.jsx** – Global authentication state management
- **ProtectedRoute.jsx** – Route protection using JWT
- **api.js** – Centralized Axios API service

---

## Backend

The backend is built using **Node.js**, **Express.js**, and **MongoDB**.

It includes:

- **authRoutes.js** – User registration and login APIs
- **taskRoutes.js** – Task CRUD APIs
- **authMiddleware.js** – JWT authentication middleware
- **generateToken.js** – Generates 7-day JWT tokens
- **User.js** – User model
- **Task.js** – Task model
- **db.js** – MongoDB connection
- **server.js** – Express server configuration

User credentials and task data are securely stored in **MongoDB Atlas**.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |
| GET | `/api/tasks` | Retrieve all tasks (Protected) |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update task status |
| DELETE | `/api/tasks/:id` | Delete a task |

---

## Project Structure

```text
IFSD-Project-Study-planner--main/
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
```

---

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB Atlas (or Local MongoDB)
- npm

### Clone the Repository

```bash
git clone https://github.com/<your-username>/IFSD-Project-Study-planner--main.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Open your browser and navigate to:

```
http://localhost:5174
```

---

## Expected Outcome

- Secure user authentication using JWT.
- Responsive and intuitive study planner dashboard.
- Full CRUD functionality for task management.
- Persistent user sessions.
- Secure storage of user and task data in MongoDB Atlas.

---

## Future Enhancements

- Task categories and labels.
- Study progress analytics.
- Calendar integration.
- Reminder and notification system.
- Dark mode support.
- Profile management.
- Search and filter tasks.

---

## Author

**Ravi Kumar Kushwaha**
