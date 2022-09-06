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

// Request Data: N, Response Date: Y
app.get('/api/users', (req, res) => {
    // Retuen User data
    res.json({ok: true, users: users});
});

/**
 * Request Data: Y, Response Date: Y
 * @path {GET} http://localhost:3000/api/users/user?id=1
 */
app.get("/api/users/user", (req, res) => {
    const user_id = req.query.id;
    const user = users.filter(data => data.id == user_id);

    res.json({ok: false, user: user});
});

/**
 * Request Data: Y, Response Date: Y
 * @path {GET} http://localhost:3000/api/users/user-body
 */
app.get("/api/users/user-body", (req, res) => {
    const user_id = req.body.id;
    const user =  users.filter(data => data.id == user_id);

    res.json({ok: false, user: user});
});

/**
 * Request Data: Y, Response Date: Y
 * @path {GET} http://localhost:3000/api/users/:user_id
 * :user_id == variable
 */
app.get("/api/users/:user_id", (req, res) => {
    const user_id = req.params.user_id;
    const user = users.filter(data => data.id == user_id);

    res.json({ok: true, user: user})
})


app.listen(port, () => console.log("Listen on " + port + " Port!!"));