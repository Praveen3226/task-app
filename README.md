# Task Manager App

## A full-stack Task Management System built with Next.js, Express.js, MongoDB, and JWT Authentication.
## Manage your daily tasks with ease — add, edit, mark complete, filter, and delete.

# Tech Stack

- 	Frontend:
- Next.js 15
- React 19
- Axios
- Tailwind CSS (for styling)

# Backend:

- Node.js + Express.js
- MongoDB (Mongoose ODM)
- JWT for Authentication
- Bcrypt for Password Hashing
- CORS + Dotenv

# Features

- User Authentication (Register / Login)
- JWT Protected Routes
- Add, Edit, Delete Tasks
- Mark tasks as Completed / Pending
- Filter tasks by priority, status, or date range
- Clear all completed tasks
- Light/Dark Theme Toggle (persists via localStorage)
- Responsive Dashboard
- MongoDB Data Persistence

Folder Structure
project-root/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── middleware/
│   │   └── auth.js
│   ├── index.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── pages/
│   │   ├── index.js        # Login / Signup Page
│   │   └── dashboard.js    # Task Dashboard
│   ├── src/context/AuthContext.js
│   ├── styles/
│   ├── .env.local
│   └── package.json
│
└── README.md

# Prerequisites

- Node.js (v18 or above)
- MongoDB (Local or Atlas Cluster)

# Environment Variables
## Backend (backend/.env)
  - PORT=5000
  - MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
  - JWT_SECRET=supersecretkey

## Frontend (frontend/.env.local)
  - NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Setup Instructions
## Clone the repository
- git clone https://github.com/yourusername/task-manager.git
- cd task-manager

## Backend Setup
- cd backend
- npm install
- npm run dev


Backend runs on http://localhost:5000

If successful, you should see:
Server listening on 5000 and Mongo connection success

## Frontend Setup
- cd ../frontend
- npm install
- npm run dev


Frontend runs on http://localhost:3000

- 1.	Create User and Login
- 2.	Visit http://localhost:3000
- 3.	Sign Up → Then Login
- 4.	You’ll be redirected to /dashboard
- 5.	Start adding and managing your tasks 

# API Endpoints
## Auth Routes
## Method	Endpoint	Description
- POST	/api/auth/register	Register new user
- POST	/api/auth/login	Login user and get JWT

## Task Routes (Protected)
## Method	Endpoint	Description
- GET	/api/tasks	Get all tasks for logged-in user
- POST	/api/tasks	Create a new task
- PUT	/api/tasks/:id	Update existing task
- DELETE	/api/tasks/:id	Delete specific task
- DELETE	/api/tasks/clear	Delete all completed tasks
 
# Additional Features

- Timestamps (createdAt, completedAt) automatically managed by Mongoose
- Error Handling with descriptive messages
- Theme Persistence via localStorage
- Frontend Filtering: Priority, Status, Date range

# Deployment

## You can deploy:

## Backend & Frontend on Render Separate Repo and Separate Web Services 

# Live Demo

## Live Demo: https://frontend-os7b.onrender.com

## API Base URL: https://task-app-wjb1.onrender.com/
