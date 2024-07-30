import chalk from "chalk";

const greenMsg= chalk.green.inverse("Success");
// console.log(greenMsg);

// console.log(process.argv); //*process is a big object and argv is an array containing information about current folder, current file and the arguement that is being passed while ruunning the script.

// console.log(process.argv[2]); //*this retunrs the user that is passed on while compiling the script. like node 06Input.js Rishav. this is gonna print Rishav

const command = process.argv[2];
if(command === 'add')
    console.log("adding note!");
else if(command === 'remove')
    console.log('removing note!');
else
    console.log('wrong command');

    console.log(process.argv);