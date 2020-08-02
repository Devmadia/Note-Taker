const router = require('express').Router();

const { makeNote } = require('../../lib/notes');
const notes = require('../../db/db.json');

// GET request
router.get('/api/notes', (req, res) => {
    res.json(notes);
});

// POST request
router.post('/api/notes', (req,res) => {
    // creates a note
    const note = makeNote(req.body, notes);
    res.json(notes);
})

module.exports = router;