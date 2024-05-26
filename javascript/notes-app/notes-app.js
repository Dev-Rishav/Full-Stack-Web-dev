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


//manupulating the values of <P>tag
const p =document.querySelectorAll('p');
p.forEach(function(par){
    par.textContent='*****'
})
