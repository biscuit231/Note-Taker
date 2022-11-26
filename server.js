const express = require("express");
const apiRouter = require('./routes/route');
const htmlRoutes = require("./routes/htmlRoutes");

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/notes', apiRouter);
app.use("/", htmlRoutes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
