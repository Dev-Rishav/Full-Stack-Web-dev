const http=require("http");
const fs=require('fs');
const url=require('url');

const myServer= http.createServer((req,res)=>{
    if(req.url=="/favicon.ico")
        return;
    const log=`${Date.now()}: ${req.method} ${req.url} new Req received\n`
    const parsedUrl=url.parse(req.url,true);
    fs.appendFile("log.txt",log,(err,data)=>{
        switch (parsedUrl.pathname){
            case '/':
                res.end("Homepage");
                break;
            case "/about":
                const username=parsedUrl.query.name;
                res.end(`Hi, ${username}`);
                break;
            case '/signup':
                if(req.method === 'GET')
                    res.end("This is a signup form");
                else if(req.method==="POST")
                {
                    //DB query
                    res.end("Success");
                }
                break;
            default:
                res.end("404 not found!");
        }
    })
})

myServer.listen(8001,()=>{
    console.log("Listening to port 8001");
})