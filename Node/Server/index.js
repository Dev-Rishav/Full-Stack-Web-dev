const http=require("http");
const fs=require('fs');
const url=require('url');

const myServer= http.createServer((req,res)=>{
    if(req.url=="/favicon.ico")
        return;
    const log=`${Date.now()}: ${req.url} new Req received\n`
    const parsedUrl=url.parse(req.url,true);//*by passing true it triggers the parseQueryString() property which returns an object of all the query paramters that are being passed.
    console.log(parsedUrl);
    fs.appendFile("log.txt",log,(err,data)=>{
        switch (parsedUrl.pathname){
            case '/':
                res.end("Homepage");
                break;
            case "/about":
                const username=parsedUrl.query.name;
                res.end(`Hi, ${username}`);
                break;
            default:
                res.end("404 not found!");
        }
    })
})

myServer.listen(8001,()=>{
    console.log("Listening to port 8001");
})