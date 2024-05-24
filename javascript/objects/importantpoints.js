console.log({} === {}); //false as objects having same properties does not mean they share the same memory reference.
let obj={}
let obj2=obj
console.log(obj===obj2);