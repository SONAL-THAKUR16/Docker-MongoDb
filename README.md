# 🐳 Docker MongoDB User Registration

A simple **User Registration Web Application** built using **Node.js, Express.js, MongoDB, and Docker**.

This project demonstrates how a frontend registration form communicates with a backend server and stores user data in a MongoDB database.

---

## 📌 About the Project

When a user fills out the registration form and clicks **Create Account**, the form data is sent to the **Express.js backend**.

The backend processes the data and stores it in **MongoDB**.

The stored data can then be retrieved using the `/getUsers` API and displayed in the browser or directly in the terminal.

### 🔄 Project Flow
```bash
Registration Form → Express.js → MongoDB → `/getUsers` API → Terminal / Browser
```
---

## ✨ Features

- 📝 User registration form
- ⚙️ Node.js and Express.js backend
- 🍃 MongoDB database integration
- 💾 Stores submitted user data
- 📡 `/getUsers` API for retrieving data
- 💻 Display database data through the terminal
- 🐳 Docker containerization
- 🔧 Docker Compose support

---

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB
- Docker
- Docker Compose

---

## 🔗 Quick Access

| Purpose | Link / Command |
|---|---|
| 🌐 Open Application | `http://localhost:5050` |
| 📊 View Users API | `http://localhost:5050/getUsers` |
| 💻 Display Users in Terminal | `curl.exe http://localhost:5050/getUsers` |
| 🐳 Start with Docker | `docker compose up --build` |
---

## 💻 View Data in Terminal

After starting the application, open **PowerShell** and run:
```bash
curl.exe http://localhost:5050/getUsers
```

The terminal will display the user data retrieved from MongoDB.

> The terminal only **displays** the data. The actual data is **stored in MongoDB**.

---

## 🐳 Run the Project with Docker

Run:
```bash
docker compose up --build
```

Then open:
```bash
`http://localhost:5050
```

---
## 🧪 Example

Suppose a user enters:
```bash
**Username:** John  
**Email:** john@gmail.com
```

After clicking **Create Account**, the data is stored in MongoDB.

To view the stored data in the terminal, run:
```bash
curl.exe http://localhost:5050/getUsers
```

Example output:
```bash
[{"username":"John","email":"john@gmail.com"}]
```

This shows how the data submitted through the registration form is stored in MongoDB and retrieved using the `/getUsers` API.


## 📚 What I Learned

Through this project, I learned:

- How frontend forms communicate with a backend
- How to create APIs using Express.js
- How to connect Node.js with MongoDB
- How data is stored and retrieved from a database
- How to test APIs using the terminal
- How Docker containers work
- How Docker Compose connects multiple services
- How to manage and push projects using Git and GitHub

---
