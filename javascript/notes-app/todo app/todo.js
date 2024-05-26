// let p=document.querySelectorAll('p')

// p.forEach(function(para){
//     if(para.textContent.includes('the'))
//         para.remove();
// })

const todos=[{
    text: 'Order Cat food',
    completed: false
},{
    text:'Clean kitchen',
    completed: true,
},{
    text:'Buy Food',
    completed: true
},{
    text: 'Do work',
    completed: false
},{
    text:'Exercise',
    completed: true
}]


let count=0;
todos.forEach(function (ele){
    if(!ele.completed)
        count++;
})

const ps=document.createElement('h2');
ps.textContent=`You have ${count} todos left`
document.querySelector('body').appendChild(ps)
let x=1;
todos.forEach(function(todo){
        const x=document.createElement('p');
        x.textContent=todo.text;
        document.querySelector('body').appendChild(x);
})