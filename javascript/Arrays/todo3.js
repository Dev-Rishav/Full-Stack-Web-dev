const todos = ['order cat food','clean kitchen','buy food','do work','exercise']

let todoObj=[]
for(let i=0;i<todos.length;i++){
    let obj={
        title: todos[i],
        status: (i%2==0) ? 'Completed' : 'Not Completed'
    }
    todoObj.push(obj)
}

console.log(todoObj);

const sortStatus=function(todo){
    todo.sort(function(a,b){
        if(a.status.toLowerCase()<b.status.toLowerCase())
            return -1;
        else if(a.status.toLowerCase() > b.status.toLowerCase())
            return 1;
        else
            return 0;
    })
}

sortStatus(todoObj);
console.log(todoObj);
// console.log("After sorting according to their status: "+todoObj);
