const path = require('path');
const router = require('express').Router();

// HTML routes to return the notes.html file
router.get('/notes', (req, res) => {
res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// HTML routes to return the index.html file

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});



module.exports = router;