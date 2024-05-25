const notes=[{
    title: 'My next trip',
    body: ' I would like to go to gangtok'
},
{
    title: 'Habits to work on',
    body: 'Exercise, eating a bit better',
},{
    title: 'office modification',
    body: 'Get a new seat'
}]

const findNotes=function(notes,keyword){
    const filterNotes= notes.filter(function(notes){
        const isTitleMatch=notes.title.toLowerCase().includes(keyword.toLowerCase());
        const isBodyMatch=notes.body.toLowerCase().includes(keyword.toLowerCase());
        return isTitleMatch || isBodyMatch;
    })
    return filterNotes;
}

console.log(findNotes(notes,'work'));