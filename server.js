const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRouter = require('./routes/route');

app.use('/api/notes', apiRouter);

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes"));
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
