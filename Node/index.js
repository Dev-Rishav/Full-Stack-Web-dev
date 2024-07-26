

const f=require("fs");
//fs stands for file system. require() function include this mnodule called fs into our code and returns an fs object by which we can access its functions. [node.js -.Docs] for different modules

const textIn=f.readFileSync('./01Basics.txt','utf-8') //utf-8 is for english texts. if we dont supply a second argumen then this will return a buffer.

console.log(textIn);