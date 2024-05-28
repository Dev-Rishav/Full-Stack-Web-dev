const todos = [{
    text: 'Order Cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true,
}, {
    text: 'Buy Food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

// Render notes
const filter = {
    searchText: ''
}

const renderNotes = function (todos, filter) {
    const filteredNotes = todos.filter(function (note) {
        return note.text.toLowerCase().includes(filter.searchText.toLowerCase());
    })
    document.querySelector('#notes').innerHTML = ''; // This clears the screen to initial condition
    filteredNotes.forEach(function (note) {
        const p = document.createElement('p');
        p.textContent = note.text;
        document.querySelector('#notes').appendChild(p);
    })
}

// Initial rendering
renderNotes(todos, filter);

let count = 0;
todos.forEach(function (ele) {
    if (!ele.completed) count++;
})

const ps = document.createElement('h2');
ps.textContent = `You have ${count} todos left`;
document.querySelector('body').appendChild(ps);

// Listen for todo text change
document.querySelector('#searchTodo').addEventListener('input', function (e) {
    filter.searchText = e.target.value;
    renderNotes(todos, filter); // Rerender the notes
})

// Event listener for submit handler
document.querySelector('#createTodo').addEventListener('submit', function (e) {
    e.preventDefault();
    const newTitle = {
        text: e.target.elements.titleTodo.value,
        completed: false
    }
    todos.push(newTitle);
    e.target.elements.titleTodo.value = '';
    renderNotes(todos, filter);
})

// Event listener for hideCompleted
document.querySelector('#hideCompleted').addEventListener('change', function (e) {
    const checked = e.target.checked;
    if (checked) {
        const completedTodos = todos.filter(function (todo) {
            return !todo.completed;
        })
        renderNotes(completedTodos, filter);
    } else {
        renderNotes(todos, filter);
    }
})
