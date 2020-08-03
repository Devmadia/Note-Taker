const path = require('path');
const fs = require('fs');

const uniqid = require('uniqid');  // npm package for unique ids

let notes = require('../db/db.json');

const saveNote = (note) => {
    const newNote = {
        title: note.title,
        text: note.text,
        id: uniqid() // uses uniqid package to generate a unique id for each note
    };

    notes.push(newNote);
    // file system function to write to the db.json file rather than local storage
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
};

const deleteNote = (noteID) => {
    notes = notes.filter((note => note.id !== noteId))

    fs. writeFileSync(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify(notes, null, 2)
    );
    return notes;
};

module.exports = { 
    saveNote, 
    deleteNote 
};