# 📝 MERN Task Manager

A full-stack Task Manager app built with the **MERN stack**.

## 🚀 Features

* Add, edit, delete tasks
* Filter by `status` and `assignedTo`
* Bootstrap 5 UI
* REST API with Express + MongoDB

## 🛠️ Setup

### Backend

```bash
cd backend
npm install
```

Create `.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
```

Start server:

```bash
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

App runs at: `http://localhost:5173`

## 📦 API

* `GET /api/tasks`
* `POST /api/tasks`
* `PUT /api/tasks/:id`
* `DELETE /api/tasks/:id`

## 📁 Tech Stack

React, Vite, Bootstrap, Express, MongoDB

## 👤 Author

Made with ❤️ by \[Your Name]
