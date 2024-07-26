const url=require('url')

const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req.url); //it returns two overviews one is '/' which is root and another  is '/favicon.ico' which browser requests on its own. Accessing any url from browser can be shown here.


    const pathName= req.url;

    if(pathName==='/overview' || pathName==='/')
        res.end("This is overview");
    else if(pathName==='/about')
        res.end ('This is about section');
    else
        res.writeHead(404,{
            'Content-type':'text/html'
        });//shows on log, this is  a header. header in html have metadata which can be passed to browser for better debugging.
        //! header are always passed before end().
        res.end('<h1>Page not found</h1>');
    // res.end("hello from the server!")
})

server.listen(8001,()=>{
    console.log('Listening to port 8001');
})
// *Second arguement is optional

