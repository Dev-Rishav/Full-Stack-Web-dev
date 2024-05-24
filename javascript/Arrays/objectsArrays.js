const notes=[ {}, {},{}] //array of empty objects
const note=[
{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habits to work on',
    body: "Exercise, Eating a bit better"
},{
    title:'Office modification',
    body: 'Get a new seat'
}]

// console.log(note.indexOf({}));//this should the index i.e. 0 but it will return -1
//the reason is two objects having same property does not mean they share the same memory reference
// that is why indexOf() breaks in case of Object

//one alternative is findIndex

// note.findIndex(function(item,index){
//     console.log(item);
// })//this exactly behaves like for-each function

// const res = note.findIndex(function(item){
//     return item.title === 'Office modification'
 // })
 // console.log(res);


// const firstNote=function(notes,noteTitle){
//     const index=note.findIndex(function(item){
//         return item.title.toLowerCase() === noteTitle.toLowerCase() 
//     })
//     return note[index];
// }


// console.log(firstNote(note,"habits to work on"));

//another alternaive is find ()

const firstNote=function(note,noteTitle){
    const noteItem=note.find(function(item){
        return item.title.toLowerCase() === noteTitle.toLowerCase() 
    })
    return noteItem;
}

console.log(firstNote(note,'Office modification'));





