let myAccount={
    name: 'Rishav Chakraborty',
    expenses: 0,
    income: 0
}
let otherAccount= myAccount
let myfunc=function(acc,account){
    acc.expenses+=account
    console.log(acc);
}
myfunc(myAccount,300)
console.log(myAccount)      
//object reference is passed thourgh argument not a copy of the object


console.log(otherAccount);  //points to same memory location, meaning not copied



