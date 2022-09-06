// Use the express module
const express = require('express');
const app = express();

// Internal body-parser connection
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Temporary Data
const users = [
    { id: 1, name: "user1" },
    { id: 2, name: "user2" },
    { id: 3, name: "user3" }
];
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello, Restful API Example Page!");
});

app.listen(port, () => console.log("Listen on " + port + " Port!!"));