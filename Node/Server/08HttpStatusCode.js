//* status code (100-199) => Informational responses
//* status code (200-299) => Successful responses
//* status code (300-399) => Redirectional messages
//* status code (400-499) => Client error responses
//* status code (500-599) => Server error reponses

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



app.get('/api/users',(req,res)=>{
    res.setHeader("X-MyName","Rishav");
    console.log(req.headers);   //from API
    return res.json(users);
})



app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if(!user)
            return res.status(404).json({user: "Not Found"});
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
    if(!body || body.first_name || body.last_name || body.email || body.gender || body.job_title)
        return res.status(400).json({field:"missing"});
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ status: 'error', message: 'Failed to save user data' });
        }
        return res.status(201).json({ status: 'success', id: users.length });
    });
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});