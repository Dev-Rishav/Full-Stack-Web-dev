//DOM- Document Object Model Document is from HTML and object is from javascript

// const p= document.querySelector('p')
// console.log(p)
// p.remove()

//what it does is removing the p tag from the html document
//first <P> tag is removed 

//Query all and remove
// const p =document.querySelectorAll('p');
// console.log(typeof(p)) //object
// p.forEach(function ( p){
//     p.remove();
// })

//show all the elements defined by <p> tag
// const p =document.querySelectorAll('p');
// p.forEach(function(par){
//     console.log(par.textContent);
// })


//manipulating the values of <P>tag
// const p =document.querySelectorAll('p');
// p.forEach(function(par){
//     par.textContent='*****'
// })


// //add a new tag say <p> using javascipt
// const newp=document.createElement('p');
// newp.textContent="this para tag is made up using javascript";
// document.querySelector('body').appendChild(newp);



const notes=[{
    title: 'my next trip',
    body:'I would like to go to Spain'
},{
    title:'habits to work on',
    body:'Exercise. Eating a bit better'
},{
    title:'Office Modification',
    body:'Get a new seat'
}]


// document.querySelector('button').addEventListener('click',function(e){
//     console.log("It is working!");
//     console.log(e); //gives the description of the event
// })

//manipulate the button text using target property of event
// document.querySelector("button").addEventListener('click',function(e){
//     console.log("It is working!");
//     console.log(e); //gives the description of the event
//     e.target.textContent= 'This button was clicked';
// })

// document.querySelectorAll('button')[1].addEventListener('click',function(){
//     console.log("2nd button is pressed");
// })

//the problem is if the frontend developer misplace the button order in  html file then the messages of the respective button will change
//to reduce this coupling between html doc and script file we will assign unique ids to each button


// manipulate the button text using target property of event
document.querySelector("#firstButton").addEventListener('click',function(e){
    console.log("It is working!");
    console.log(e); //gives the description of the event
    e.target.textContent= 'This button was clicked';
})

// document.querySelector('#secondButton').addEventListener('click',function(){
//     console.log("2nd button is pressed");
// })


//id's are unique to each elements but class can be assigned to multiple elements


document.querySelector('#secondButton').addEventListener('click',function(){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove();
    })
})

//--single--
// p
// #replace
// .item

// --Multiple--
// p#order
// Button.inventory
// h1#title.application
// h1.application#title

//taking input from browser
// document.querySelector('#searchText').addEventListener('change',function(e){
//     console.log("yes");
//     console.log(e.target.value);
// })  //change event only fires when enter is pressed or focus is shifted




//render all the notes 

const filter={
    searchText:''
}

const notesFilter=function(notes,filter){
    const filteredNotes=notes.filter(function(note){
        return note.title.toLowerCase().includes(filter.searchText.toLowerCase());
    })
    document.querySelector('#notesMenu').innerHTML='';
    filteredNotes.forEach(function(note){
        const newEle=document.createElement('p')
        newEle.textContent=note.title;
        document.querySelector('#notesMenu').appendChild(newEle)
    })
}

//initial rendering
notesFilter(notes,filter);

document.querySelector('#searchText').addEventListener('input',function(e){
    filter.searchText=e.target.value;
    notesFilter(notes,filter);
})   //input event fires as soon a character is typed

//event Listener for add elements 
// document.querySelector('#nameForm').addEventListener('submit',function(e){
//     e.preventDefault();
//     console.log((e.target.elements.firstName.value)); //elements used to grab elements of a form using their name property
//     e.target.elements.firstName.value=''
// })

document.querySelector('#testing').addEventListener('change',function(e){
    console.log(e.target.checked); //returns boolean
})


//Local Storage support with CRUD operations (Create Read Update Delete)

/*---------Create----------*/
// localStorage.setItem('location','WestBengal');

// /*----------Read-----------*/
// console.log(localStorage.getItem('location'));

// /*-------------Update---------*/
// localStorage.setItem('location','Bhopal');

// /*-----------Delete----------*/
// localStorage.removeItem('location'); //removes only location variable from local storage
// localStorage.clear()//removes all data items 

//localStorage object can only store data in string format so we need to convert all the data items to strings
//converting objects to string using JSON (Java Script Object Notifier)

// const user={
//     name: 'Rishav',
//     age: 23
// }

//storing the data in local storage 
// const userJson=JSON.stringify(user); //stringify use to convert to string
// console.log(userJson);
// localStorage.setItem('user',userJson);

//retrieving the data from local storage
const userJson=localStorage.getItem('user');
const user=JSON.parse(userJson); //parse used to convert from string
console.log(`${user.name} is ${user.age} years old`);



//check for existing saved time

if(localStorage.getItem('notes')==null){
    notes.push({
        title:'',
        body:''
    })
}

