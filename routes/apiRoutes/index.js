const router = require('express').Router();

const { saveNote, deleteNote } = require('../../lib/notes');
let notes = require('../../db/db.json');

// API routes
// GET request
router.get('/notes', (req, res) => {
    res.json(notes);
});

// POST request to make a note
router.post('/notes', (req, res) => {
    // creates a note in the db.json file
    const newNote = req.body;  // matching call passed through from lib/notes
    saveNote(newNote);
    res.json(notes);
});

// route request to delete a note
router.delete('/notes:id', (req, res) => {
    //uses the ID to delete a note
    notes = deleteNote(req.params.id);
    res.json(notes);
});

module.exports = router;