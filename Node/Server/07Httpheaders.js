const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//? Understanding this urlencoded() middleware, this actually looks for http header "content-type" and if it is of form x-www-form-urlencoded then it converts the raw data to json format and pass it or otherwise next() comes into play.

//custom middleware-1
app.use((req,res,next)=>{
    console.log("Hello from middleware 1");
    req.myUsername="Rishav"; 
    next() 
})
//custom middleware-2
app.use((req,res,next)=>{
    console.log("hello from middleware 2",req.myUsername);
    next();
})

const users = require('./MOCK_DATA.json');
const { log } = require('console');


//Rest API
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    return res.send(html);
});


//? HTTP headers
//*Http headers are an important part of the API request and response as they represent the meta-data associated with the API request and response. In simple words headers carry information for the request and response body.

app.get('/api/users',(req,res)=>{
    //creating a custom https header
    //! Good Practice: always put a 'X' before the attribute of custom header
    res.setHeader("X-MyName","Rishav");
    console.log(req.headers);   //from API
    return res.json(users);
})



app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        const body = req.body;        
        const id = Number(req.params.id);
        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex !== -1) {
            const result= { ...users[userIndex], ...body, id: id };
            users[userIndex] = result;
            fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
                if (err) {
                    return res.status(500).json({ status: 'error', message: 'Failed to update user data' });
                }
                return res.json({ status: 'success', id: id });
            });
        } else {
            return res.status(404).json({ status: 'error', message: 'User not found' });
        }
    })
    .delete((req, res) => {
        const id=Number(req.params.id);        
        const index=users.findIndex((user)=>user.id===id);
        console.log(index);
        
        if(index !== -1){
            users.splice(index,1);
            fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err)=>{
                if(err)
                    console.log(err);
                else    
                    return res.json({staus:"success"});
            })
        }
        else
            return res.json({status:"failed",err:"id not found"});
        
    });

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ status: 'error', message: 'Failed to save user data' });
        }
        return res.json({ status: 'success', id: users.length });
    });
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});