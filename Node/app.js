import { createRequire } from "module";
const require = createRequire(import.meta.url);

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { getNotes, addNote } from "./08notes.mjs";

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
    handler: function (argv) {
      addNote(argv.title, argv.body);
    },
  })
  .command({
    command: "remove",
    describe: "Removing note",
    handler: function () {
      console.log("Removing note");
    },
  })
  .command({
    command: "read",
    describe: "Reading a note",
    handler: function () {
      console.log("Reading a note");
    },
  })
  .command({
    command: "list",
    describe: "Listing commands",
    handler: function () {
      console.log("Listing commands");
    },
  })
  .parse(); // parse the arguments
