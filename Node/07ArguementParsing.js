// import yargs from "yargs";

const yargs=require('yargs')

//Customise yargs version
yargs.version('1.1.1')
// console.log(process.argv);
// console.log(yargs.argv);

//Create add command
yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{           //builder property stores an object that defines what arguements can be or should be passed
        title:{
            describe:'Note title',
            demandOption:true,  //*this makes sure that those arguement should be passed making it mandatory.
            type: 'string', //*without this type, if user passes nothing on title property then it will assign boolean value: True, and for this type property it will store as an empty string
        },
        body:{
            describe:'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler:function(argv){
        console.log("Title: ",argv.title);
        console.log("Body: ",argv.body);
        console.log(argv);
    }
})

//create remove command 
yargs.command({
    command:'remove',
    describe:'removing note',
    handler: function (){
        console.log("removing note");
    }
})

//create command for read 
yargs.command({
    command:'read',
    describe: 'reading a note',
    handler: function(){
        console.log("Reading a note");
    }
})

//create command for list
yargs.command({
    command:'list',
    describe:'Listing commands',
    handler:function(){
        console.log("Listing commands");
    }
})



// console.log(yargs.argv); //*without this the yargs object never gets invoked so we need this log statement or there is also another way yargs.parse()

yargs.parse()