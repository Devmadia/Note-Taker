const router = require('express').Router();

const notes = require('../../db/db.json');

router.get('/api/notes', (req, res) => {
    res.json(notes);
});

router.post('/api/notes', (req,res) => {
    // creates a note
    const note = createNote(req.body, notes);
    res.json(note);
})

module.exports = router;