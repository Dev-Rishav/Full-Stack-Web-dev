var firstName='rishav'

firstName='rish'

var firstName='rick'        //when using let, variable cant be redeclared but while using var it can be done
console.log(firstName)


if(true)
    var rt=10
console.log(rt) //var is function scoped variable not blocked scope thatswhy it can be used outside the block also


const fn=function(){
    var name='Rishav'
}
fn()
console.log(name);  //cant access the fn variable 


let vara
console.log(vara)   //prints undefined

console.log(v1)     //throws error ki variable is not defined
let v1

var v2
console.log(v2)     //prints undefined

console.log(v3) //prints undefined but doesnot throw variable not defined error
var v3

//because var and highest priority during execution so the code is treated like this
// var v3
// console.log(v3);


//an prime example will be

age =10
console.log(age);       //will print 10
var age 