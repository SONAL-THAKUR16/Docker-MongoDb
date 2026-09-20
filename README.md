# 🐳 Docker MongoDB User Registration

A simple user registration application built using Node.js, Express.js, MongoDB, and Docker.

## 📌 About the Project

This project demonstrates how a registration form sends user information from the frontend to the backend and stores it in MongoDB.

When a user fills in the registration form and clicks Create Account, the data is sent to the Express.js backend. The backend stores the submitted information in MongoDB.

The stored data can then be retrieved using the /getUsers API and displayed in the terminal or browser.

## 🔄 How It Works

User fills the registration form
        ↓
Form sends data to the backend
        ↓
Node.js + Express.js receives the data
        ↓
Data is stored in MongoDB
        ↓
/getUsers API retrieves the data
        ↓
Data is displayed in the terminal

## ✨ What This Project Can Do

- Allows users to submit a registration form
- Sends form data to the backend
- Stores submitted user data in MongoDB
- Retrieves stored users using an API
- Displays stored data in the terminal
- Runs the application using Docker
- Demonstrates frontend, backend, database, and Docker integration

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MongoDB
- Docker
- Docker Compose

## 📡 API

GET /getUsers

This API retrieves the user data stored in MongoDB.

## 💻 Display Data in Terminal

After starting the application, open PowerShell or Command Prompt and run:

curl.exe http://localhost:5050/getUsers

This will display the user data retrieved from MongoDB directly in the terminal.

Example:

curl.exe http://localhost:5050/getUsers

The terminal will show something similar to:

[{"username":"John","email":"john@gmail.com"}]

The terminal is only displaying the data. The actual data is stored in MongoDB.

## 🌐 Display Data in Browser

You can also open:

http://localhost:5050/getUsers

This will display the stored user data in the browser.

## 🐳 Run with Docker

Run:

docker compose up --build

Then open:

http://localhost:5050

## 📚 What I Learned

- How frontend forms send data to a backend
- How Node.js and Express.js handle requests
- How to connect a backend with MongoDB
- How to insert and retrieve data from MongoDB
- How APIs work
- How to display API data in the terminal
- How to use Docker and Docker Compose
- How to test an API using the terminal
- How to use Git and GitHub
