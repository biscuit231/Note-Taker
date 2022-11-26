const express = require("express");
const router = express.Router();
const path = require("path");
const uniqid = require('uniqid');
const database = require('../db/db.json');
const fs = require('fs');

router.route("/")
    .get((req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    })
    .post((req, res) => {
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);
        res.json(db);
        const notes = {
          title: req.body.title,
          text: req.body.text,
          id: uniqid(),
        };
        db.push(notes);
        fs.writeFileSync('db/db.json', JSON.stringify(db));
        res.json(db);
});

function deleteNote(id, database) {
    for(let i = 0; i < database.length; i++) {
        let note = database[i];

    if(note.id == id) {
            database.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify(database, null, 2)
            );
    break;
}}}

router.delete('/:id', (req, res) => {
    deleteNote(req.params.id, database);
    res.json(true);
});


module.exports = router;