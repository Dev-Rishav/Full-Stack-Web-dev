let myobj={
    title: 'DSA using JAVA',
    year: 2001,
    pageCount: 500
}
// console.log(typeof(myobj.title));
// console.log(`${myobj.title} launched in ${myobj.year} with ${myobj.pageCount} pages`);

let myob2={
    title: 'ansi c',
    year : 2006,
    pageCount: 300
}

let func=function(book){
    return{
        summary: `${book.title} is released in the year ${book.year}`,
        pageCountSummary: `${book.title} is released in the year ${book.year} which is ${book.pageCount} pages long`
    }
}

let book1=func(myobj)
let book2=func(myob2)

console.log(book1.summary);
console.log(book1.pageCountSummary);


//Challenge area
let conv=function(farenhite){
    return{
        farenhite: farenhite,
        celsius:( (farenhite-32) * 5 /9),
        kelvin: (farenhite + 459.6) * 5 / 9
    }
}

console.log(conv(200).farenhite);