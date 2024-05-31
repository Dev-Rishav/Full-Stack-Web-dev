//Fetch existing todos from local storage
const getSavedTodos = function (key) {
    if (localStorage.getItem(key) != null)
        return JSON.parse(localStorage.getItem(key));
    else
        return [];
}


//Save todos to local storage
const savedTodos = function (key, value) {
    localStorage.setItem(key, JSON.stringify(value)); //store the data
}


//Render application todos based on filters
const renderTodos = function (todos, filter) {
    const filteredNotes = todos.filter(function (note) {
        return note.text.toLowerCase().includes(filter.searchText.toLowerCase());
    })
    document.querySelector('#todos').innerHTML = ''; // This clears the screen to initial condition
    filteredNotes.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDom(todo));
    })

    const incompletedTodos=filteredNotes.filter(function(todo){
        return !todo.completed;
    })
    document.querySelector('body').appendChild(generateSummaryDOM(todos));
}

//get the DOM elements for an individual note
const generateTodoDom= function (todo){
    const p = document.createElement('p');
    p.textContent = todo.text;
    return p;
}

//get the DOM elements for list summary 
const generateSummaryDOM=function(incompletedTodos){
    const ps = document.createElement('h2');
    // document.querySelector('h2').innerHTML=''; //TODO
    ps.textContent = `You have ${incompletedTodos.length} todos left`;//TODO handle the multiple  lines 
    return ps;
    
}