const todos = ['order cat food','clean kitchen','buy food','do work','exercise']

let todoObj=[]
for(let i=0;i<todos.length;i++){
    let obj={
        title: todos[i],
        status: (i%2==0) ? 'Completed' : 'Not Completed'
    }
    todoObj.push(obj)
}

// console.log(todoObj);
let removeObj=function(objAr,objTitle){
    todoObj.forEach(function(item,index){
        if(item.title.toLowerCase() === objTitle.toLowerCase())
            todoObj.splice(index,1);
    })
}
console.log(todoObj);
removeObj(todoObj,'clean kitchen')
// console.log(`After deleting the object, the new array is ${todoObj}`);
console.log(todoObj);

const thingsToDo=function(todoObj,status){
    const newArray=todoObj.filter(function(obj){
        return obj.status.toLowerCase()===status.toLowerCase();
    })
    return newArray;
}

console.log(thingsToDo(todoObj,'completed'));
