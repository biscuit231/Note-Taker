const app = require('express').Router();
const path = require('path');

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
    console.log('Path /notes');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    console.log('Path *');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    console.log('Path /');
});


module.exports = app;
