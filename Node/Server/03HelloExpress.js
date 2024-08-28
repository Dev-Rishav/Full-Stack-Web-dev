const express=require("express");


const app= express();


//! Basic Routing
app.get('/',(req,res)=>{  //*this works as handler function for only home path
    return res.send("Hello from home page."+" Hey "+ req.query.name);
})
//? here get method signifies the http method 
//*One of the adavantages of express app is, that we dont have to externally handle the querry params that are being passed through the web site. [req.query.<parametername>]
//!whereas in dedicated handler fucntion we have to use url package to parse the querry params

app.get('/about',(req,res)=>{   //*this works as handler function for about path
    return res.send("Hello from about page");
})

//? Similarly we can use post method too
// app.post




// const myServer=http.createServer(app);

// myServer.listen(8001,()=>{
//     console.log("Listening to port 8001");
// })


//? Express can also handle listeners too.
app.listen(8001,()=>{console.log("Listening to port 8001");
})
//this will internally require http and create server and then listen to the defined port 

