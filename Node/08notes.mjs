import chalk from 'chalk';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');

const getNotes = function () {
  return 'Your notes...';
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.filter(function (note) {
    return note.title === title;
  });
  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse('Notes added successfully'));
  } else {
    console.log(chalk.red.inverse('Note title exists'));
  }
};

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString();
    const data = JSON.parse(dataJson);
    return data;
  } catch (error) {
    // If the file notes.json does not exist then it will return an empty array
    return []; // Returns an empty array.
  }
};

const removeNote = function(title){
    let notes=loadNotes();
    const noteRemove=notes.filter(function(note){
        return note.title === title
    })
    if(noteRemove.length >0){
      console.log(chalk.red("Removing Note"));
        notes=notes.filter((note)=>{
            return note.title !== title;
        })
        // console.log(typeof(notes));
        const notesJson=JSON.stringify(notes)
        fs.writeFileSync('notes.json',notesJson);
    }
    else  
      console.log(chalk.red.inverse("Note title does not exists!"));
}

// Exporting functions using ES module syntax
export { getNotes, addNote,removeNote};
