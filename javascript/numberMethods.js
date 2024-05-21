let num =103.941

console.log(num.toFixed(2))   //no of digits after decimal

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min=10
let max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)

//Guessing game 
let guessNumber=function(x){
    if(x==Math.floor(Math.random()*(max-min+1))+min)
        console.log("correct");
    else
        console.log('Incorrect');
}

guessNumber(12)