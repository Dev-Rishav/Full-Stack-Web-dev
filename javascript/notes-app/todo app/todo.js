//Fetch existing todos from local Storage
let todos=[]
todos=getSavedTodos('todos');

// Render notes
const filter = {
    searchText: ''
}
// Initial rendering
renderTodos(todos,filter);


// Listen for todo text change
document.querySelector('#searchTodo').addEventListener('input', function (e) {
    filter.searchText = e.target.value;
    renderNotes(todos, filter); // Rerender the notes
})

// Event listener for createTODO handler
document.querySelector('#createTodo').addEventListener('submit', function (e) {
    e.preventDefault();
    const newTitle = {
        text: e.target.elements.titleTodo.value,
        completed: false
    }
    todos.push(newTitle);
    savedTodos('todos',todos);
    e.target.elements.titleTodo.value = '';
    renderTodos(todos, filter);
})

// Event listener for hideCompleted
document.querySelector('#hideCompleted').addEventListener('change', function (e) {
    const checked = e.target.checked;
    if (checked) {
        const completedTodos = todos.filter(function (todo) {
            return !todo.completed;
        })
        renderTodos(completedTodos, filter);
    } else {
        renderTodos(todos, filter);
    }
})


