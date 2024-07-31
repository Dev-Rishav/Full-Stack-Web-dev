const fs=require('fs');

const dataBuffer=fs.readFileSync('1-json.json')
const data=dataBuffer.toString();
console.log(data);
const dataJson=JSON.parse(data);
dataJson.name="Rishav"
dataJson.age=24
const newData=JSON.stringify(dataJson);
fs.writeFileSync('1-json.json',newData) //overrides the data in json