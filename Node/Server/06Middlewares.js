const express = require('express');
const fs = require('fs');
const app = express();

//Middlewares
//*Middlewares are middle man that interact between client and server side. 
//? middlewares runs on every req,res.
//? Middlewares have the functionality to handle req,res and can return from it.
//? middleware execute one after another and then the rest of the script kicks in usinfg the next().
//? Middleware use next() to call the remaining script
//! if neither return nor next() is defined into the last middlware then the api will crash and it will wait for http methods for infinite amount of time.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//custom middleware-1
app.use((req,res,next)=>{
    console.log("Hello from middleware 1");
    //return res.json({status:"completed"});  //! this will end the script here and res will be retuned to the client side.
    req.myUsername="Rishav"; //? this binds a new property called myUsername with req object and this can be accessed anywhere in the script.
    next() //* next middleware is executed
})

app.use((req,res,next)=>{
    console.log("hello from middleware 2",req.myUsername);
    next(); //* This ensures that rest of the script runs
})

const users = require('./MOCK_DATA.json');
const { log } = require('console');

app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    return res.send(html);
});

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