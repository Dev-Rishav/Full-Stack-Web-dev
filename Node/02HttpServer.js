const http = require('http')

const server = http.createServer((req, res)=>{
    // console.log(req);
    res.end("hello from the server!")
})

server.listen(8001,()=>{
    console.log('Listening to port 8001');
})
// *Second arguement is optional

