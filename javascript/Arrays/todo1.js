const todos = ['order cat food','clean kitchen','buy food','do work','exercise']

const todoObj=[]
for(let i=0;i<todos.length;i++){
    let obj={
        title: todos[i],
        status: (i%2==0) ? 'Completed' : 'Not Completed'
    }
    todoObj.push(obj)
}

// console.log(todoObj);
let removeObj=function(objArray){
        
}