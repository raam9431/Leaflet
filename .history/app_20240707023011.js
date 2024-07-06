const express = require('express');
const app = express();
const path = require('path');
const http = require('http');

const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.send("hey");
});
app.get("/", function (req, res) {
    res.send("index");
});

app.listen(3000, function () { 
    console.log('server is running on port 3000');
})
