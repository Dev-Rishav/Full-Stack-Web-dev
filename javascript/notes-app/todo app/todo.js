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

const filter={
    searchText:''
}

const renderNotes=function(todos,filter){
    const filteredNotes = todos.filter(function(notes){
        return notes.text.toLowerCase().includes(filter.searchText.toLowerCase());
    })     
    // console.log(filteredNotes);
    document.querySelector('#notes').innerHTML=''; //this clears the screen to initial condition
    filteredNotes.forEach(function(note){
        const pl=document.createElement('p');
        pl.textContent=note.text;
        document.querySelector('#notes').appendChild(pl)
    })
}

//initial rendering
renderNotes(todos,filter);

let count=0;
todos.forEach(function (ele){
    if(!ele.completed)
        count++;
})

const ps=document.createElement('h2');
ps.textContent=`You have ${count} todos left`
document.querySelector('body').appendChild(ps)

// todos.forEach(function(todo){
//         const x=document.createElement('p');
//         x.textContent=todo.text;
//         document.querySelector('body').appendChild(x);
// }) //initially rendered already

document.querySelector('#addTODO').addEventListener('click',function(e){
    console.log("Add a todo");
})


//Listen for todo text change
document.querySelector('#addnewTodo').addEventListener('input',function(e){
    filter.searchText=e.target.value;
    renderNotes(todos,filter)   //rerender the notes
})
