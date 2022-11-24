const path = require('path');
const fs = require('fs')
const uniqid = require('uniqid');
const router = require('express').Router();


router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
});

router.post('/api/notes', (req, res) => {
    let database = fs.readFileSync('./db/db.json');
    database = JSON.parse(database);
    res.json(database);

    let note = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(),
    };

    database.push(note);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.json(database);
});

router.delete('/api/notes/:id', (req, res) => {
    let database = JSON.parse(fs.readFileSync('./db/db.json'))
    let deleteNotes = database.filter(item => item.id !== req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
    
});


module.exports = router;
