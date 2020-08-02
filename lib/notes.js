const path = require('path');
// const fs = require('fs');

const notes = require('../db/db.json');
const uniqid = require('uniqid');  // npm package for unique ids

const makeNote = note => {
    const newNotes = {
        title: note.title,
        text: note.text,
        id: uniqid() // uses uniqid package to generate a unique id for each note
    }
notes.push(newNotes);
console.log(notes)
}

module.exports = { makeNote };