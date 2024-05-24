let notes=['Notes 1','Notes 2','Notes 3']

// console.log(notes);
// console.log(notes.length);

notes.push("in th end")
// console.log(notes);
// console.log(notes.pop()); //pops the element from the end and returns it
// console.log(notes);


// console.log(notes.shift());  //pops element from the beginning
// console.log(notes);

// console.log(notes.unshift('hello')) //add all the elements at the beginning that are passed as arguments
// console.log(notes);

//slice the array
// The splice() method of Array instances changes
// the contents of an array by removing or replacing existing elements and/or adding new elements in place.
notes.splice(1,0,"this is the second item") //first arg: index , second arg: after replacing how many items are gonna be replaced with, third arg: the actual item
// console.log(notes)

notes.splice(2,1,"this is the new item");
// console.log(notes);

//indexing is supported
notes[2]="yallo";
// console.log(notes);


//task
const todos=['Order cat food','clean kitchen','buy food','do exercise']

// console.log(todos);
todos.splice(2,1);
// console.log(todos);
todos.push("new item");
// console.log(todos)
todos.pop()
// console.log(todos);

// notes.forEach(function(){ //this phenomena is called call back function
//                             //passing a function as parameter to another function
//     console.log("hi")
// })


notes.forEach(function (item,index){
    console.log(index+1+"->"+item);
})
console.log(notes.indexOf("new item")); //returns the index back if found otherwise -1





