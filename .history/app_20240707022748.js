const express = require('express');
const app = express();

const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(serverfunction name(params) {
    );
}

app.set("view engine", "ejs");
app.use(express.static(path.join(_dirname, "public")));

app.get("/", function (req, res) {
    res.send("hey");
});

app.listen(3000, function () { 
    console.log('server is running on port 3000');
})
