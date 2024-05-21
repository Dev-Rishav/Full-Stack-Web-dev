let name = '   Rishav Chak   '

//length property
console.log(name.length);

//uppercase
console.log(name.toUpperCase())

//lowercase
console.log(name.toLowerCase());

//includes method
let password='jhsdfaguyasd gfwe password 4162487912334'
console.log(password.includes('password'))

//trim
console.log(name.trim())

let isValidPassword=function(password){
    return password.length<9 || password.includes('password')
}

console.log(isValidPassword(password));
