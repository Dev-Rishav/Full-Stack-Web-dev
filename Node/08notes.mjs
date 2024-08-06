import chalk from 'chalk';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs');

const getNotes = () => {
  return 'Your notes...';
};

const addNote = (title, body) => {
    console.log(title,body);

  const notes = loadNotes();
  const duplicateNote = notes.filter( (note) => {
    return note.title === title;
  });

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    // console.log(notes);

    saveNotes(notes);
    console.log(chalk.green.inverse('Notes added successfully'));
  } else {
    console.log(chalk.red.inverse('Note title exists'));
  }
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJson);
};

const loadNotes = () => {
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

const removeNote = (title)=>{
    let notes=loadNotes();
    const noteRemove=notes.filter((note)=>{
        return note.title === title
    })
    if(noteRemove.length >0){
      console.log(chalk.red("Note Removed!"));
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
