const router = require('express').Router();

const { makeNote } = require('../../lib/notes');
let notes = require('../../db/db.json');

// GET request
router.get('/notes', (req, res) => {
    res.json(notes);
});

// POST request
router.post('/notes', (req,res) => {
    // creates a note
    const note = makeNote(req.body, notes);
    res.json(notes);
})

module.exports = router;