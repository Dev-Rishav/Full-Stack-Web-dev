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
document.querySelector("button").addEventListener('click',function(e){
    console.log("It is working!");
    console.log(e); //gives the description of the event
    e.target.textContent= 'This button was clicked';
})


