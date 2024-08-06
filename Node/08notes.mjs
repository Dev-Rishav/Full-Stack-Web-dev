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
  const duplicateNotes = notes.filter( (note) => note.title === title); //*runs through the whole array even after a duplicate is found
  const duplicateNote =notes.find((note)=>note.title===title);//*runs through the whole array until and unless a duplicate is found.


  if (!duplicateNote) {
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
    const noteRemove=notes.filter((note)=> note.title === title)
    if(noteRemove.length >0){
      console.log(chalk.red("Note Removed!"));
        notes=notes.filter((note)=> note.title !== title);
        const notesJson=JSON.stringify(notes)
        fs.writeFileSync('notes.json',notesJson);
    }
    else
      console.log(chalk.red.inverse("Note title does not exists!"));
}

const listNotes = ()=>{
    const notes=loadNotes();
    if(notes.length===0)
        console.log(chalk.red.inverse("No existing note found!"));
    else{
        console.log(chalk.green.inverse("Printing notes...\n"));
        notes.map((note)=>{
            console.log(note);
            console.log("");
        })
    }
}

const readNote=(title)=>{
    const notes=loadNotes();
    const requiredNote=notes.find((note)=> note.title === title);
    if(requiredNote){
        console.log(requiredNote);
    }
    else
        console.log(chalk.red("Note not found!"));
}

// Exporting functions using ES module syntax
export { listNotes,getNotes, addNote,removeNote,readNote};
