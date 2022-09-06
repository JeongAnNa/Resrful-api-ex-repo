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

/**
 * Request Data: N, Response Date: N
 * @path {GET} http://localhost:3000/
 * @description GET Method
 */
app.get('/', (req, res) => {
    res.send("Hello, Restful API Example Page!");
});

/**
 * Request Data: N, Response Date: Y
 * @path {GET} http://localhost:3000/api/users
 * @description GET Method
 */
 app.get('/api/users', (req, res) => {
    // Retuen User data
    res.json({ok: true, users: users});
});

/**
 * Request Data: Y, Response Date: Y
 * @path {GET} http://localhost:3000/api/users/user?id=1
 * @description GET Method
 */
app.get("/api/users/user", (req, res) => {
    const user_id = req.query.id;
    const user = users.filter(data => data.id == user_id);

    res.json({ok: false, user: user});
});

/**
 * Request Data: Y, Response Date: Y
 * @path {GET} http://localhost:3000/api/users/user-body
 * @description GET Method
 */
app.get("/api/users/user-body", (req, res) => {
    const user_id = req.body.id;
    const user =  users.filter(data => data.id == user_id);

    res.json({ok: false, user: user});
});

/**
 * Request Data: Y, Response Date: Y
 * @path {GET} http://localhost:3000/api/users/:user_id
 * @description GET Method
 * :user_id == variable
 */
app.get("/api/users/:user_id", (req, res) => {
    const user_id = req.params.user_id;
    const user = users.filter(data => data.id == user_id);

    res.json({ok: true, user: user})
})

/**
 * @path {POST} http://localhost:3000/api/users/add
 * @description POST Method
 * Add user data raw
 */
app.post("/api/users/add", (req, res) => {
    const { id, name } = req.body;
    const user = users.concat({id, name});

    res.json({ok: true, users: user});
});

/**
 * @path {PUT} http://localhost:3000/api/users/update
 * @description PUT Method
 * Modify data
 */
app.put("/api/users/update", (req, res) => {
    const { id, name } = req.body;

    // map function is Array func in JS
    const user = users.map(data => {
        if(data.id == id) data.name = name
        return {
            id: data.id,
            name: data.name
        };
    });
    res.json({ok: true, users: user});
});

/**
 * @path {DELETE} http://localhost:3000/api/user/delete
 * @description DELETE Method
 * Delete data
 */
app.delete("/api/users/delete", (req, res) => {
    const user_id = req.query.user_id;
    console.log(user_id);
    const user = users.filter(data => data.id != user_id)

    res.json({ok: true, users: user,});
});


app.listen(port, () => console.log("Listen on " + port + " Port!!"));