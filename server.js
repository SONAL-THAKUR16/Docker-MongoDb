const express = require("express");
const app = express();
const path = require("path");
const MongoClient = require("mongodb").MongoClient;
const PORT = process.env.PORT || 5050;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);

// GET all users
app.get("/getUsers", async (req, res) => {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db("apnacollege-db");
    const data = await db.collection("users").find({}).toArray();
    res.send(data);
});

// POST new user
app.post("/addUser", async (req, res) => {
    const userObj = req.body;
    console.log(req.body);
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db("apnacollege-db");
    const data = await db.collection("users").insertOne(userObj);
    console.log(data);
    console.log("data inserted in DB");
    res.send("User added successfully");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});