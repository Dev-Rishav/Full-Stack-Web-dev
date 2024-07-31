const fs=require('fs');

const book={
    title:'Ego is the enemy',
    author:'Ryan Holiday'
}

const bookJson=JSON.stringify(book)
// console.log(bookJson.title); //!cant access the property as it is a string
console.log(bookJson);//string

console.log(JSON.parse(bookJson)); //converts back it to object

// fs.writeFileSync('1-json.json',bookJson);//*creates a JSON file with all the properties defined in the string

const dataBuffer=fs.readFileSync('1-json.json');//read file sync returns a data buffer if format is not passed so we need to typecast the dataBuffer using toString()
console.log(dataBuffer);
const data=dataBuffer.toString()
console.log(data);