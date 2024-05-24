let todo=['walk the dog','GYM','compete js asap']

// console.log(`Your first task is ${todo[0]} and second last task is ${todo[todo.length-2]}`);

console.log(`You have ${todo.length} tasks left`);

todo.forEach(function(item,index){  //first parameter will access the elements of the array and 2nd parameter will access the index of it.
    console.log(`${index+1}. ${item}`)
});


for(let i=0;i<todo.length;i++){
    console.log(`${i+1}. ${todo[i]}`);
}