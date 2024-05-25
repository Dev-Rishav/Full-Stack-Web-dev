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

const sortNotes= function(notes){
    notes.sort(function(a,b){   //compare function
        if(a.title.toLowerCase() < b.title.toLowerCase())   //if a is in right order
            return -1;
        else if (a.title.toLowerCase() > b.title.toLowerCase()) //if a should be replaced with b
            return 1;
        else    
            return 0;   //if both are in right place
    })
}

sortNotes(notes)
console.log(notes);