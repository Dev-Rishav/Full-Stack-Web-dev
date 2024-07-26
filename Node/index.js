
//*Synchronous [each line of code waits for the execution of previous line, that is sync] it is also called Blocking Code 
const f=require("fs");
//fs stands for file system. require() function include this mnodule called fs into our code and returns an fs object by which we can access its functions. [node.js -.Docs] for different modules

const textIn=f.readFileSync('./01Basics.txt','utf-8') //utf-8 is for english texts. if we dont supply a second argument then this will return a buffer.

console.log(textIn);

const textOut=`This is what we have learned about file handling in node ${textIn}\nCreated on ${Date.now()}`
f.writeFileSync('./output.txt',textOut);
console.log("File written");

//*Asynchronous [here every line of code does not wait for its previous lOC to be executed.]

f.readFile('01Basics.txt','utf-8',(err,data)=>{
    console.log(data);
    if(err)
        console.log(err);
});
console.log("Asynchronous behavior:- Reading your file");



//? Why do we need the asynchronous behavior of Node?
//*  Node works on single thread. That means if there are multiple users who wants to access file or do some other work they have to wait for the previous to be finished, but in aynchronous code, the call back function comes into play which reads the file (in this scenario) and other users also get CPU time in that time span. 
//! Callback !=  Asynchronous (Some of the functions, hooks make it use of callbacks to achieve asynchronous behavior)

