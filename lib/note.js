const path = require('path');
// const fs = require('fs');

const notes = require('../db/db.json');

const makeNote (body, notesArray) {
    const note = {
        title: body.title,
        text: body.text,
        id: body.id
    },
}

module.exports = { makeNote };