import { createRequire } from "module";
const require = createRequire(import.meta.url);
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { listNotes,getNotes, addNote,removeNote,readNote } from "./08notes.mjs";

// Create an instance of yargs
const argv = yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Add a note",
    builder: {
      // builder property stores an object that defines what arguments can be or should be passed
      title: {
        describe: "Note title",
        demandOption: true, // this makes sure that the argument is mandatory
        type: "string", // without this type, if user passes nothing on title property then it will assign boolean value: True, and for this type property it will store as an empty string
      },
      body: {
        describe: "Note Body",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) =>{
        addNote(argv.title,argv.body)
    },
  })
  .command({
    command: "remove",
    describe: "Removing note",
    builder:{
        title:{
            describe:"remove",
            demandOption:true,
            type:"string",
        },
    },
    handler: (argv)=>{
        removeNote(argv.title);
    },
  })
  .command({
    command: "read",
    describe: "Reading a note",
    builder:{
        title:{
            describe:"read",
            demandOption:true,
            type:"string",
        },
    },
    handler:(argv) => {
      readNote(argv.title)
    },
  })
  .command({
    command: "list",
    describe: "Listing your notes",
    handler: () => {
      listNotes();
    },
  })
  .parse(); // parse the arguments
