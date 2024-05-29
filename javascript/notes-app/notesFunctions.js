
//Initialize notes with static data
const notes=[{
    title: 'my next trip',
    body:'I would like to go to Spain'
},{
    title:'habits to work on',
    body:'Exercise. Eating a bit better'
},{
    title:'Office Modification',
    body:'Get a new seat'
}]

//render all notes into the DOM
const filter={
    searchText:''
}
const notesFilter=function(notes,filter){
    const filteredNotes=notes.filter(function(note){
        return note.title.toLowerCase().includes(filter.searchText.toLowerCase());
    })
    document.querySelector('#notesMenu').innerHTML='';
    filteredNotes.forEach(function(note){
        const newEle=document.createElement('p')
        newEle.textContent=note.title;
        document.querySelector('#notesMenu').appendChild(newEle)
    })
}


//retrieving the data from local storage
const getData=function(user){
const userJson=localStorage.getItem(user);
return JSON.parse(userJson);
}