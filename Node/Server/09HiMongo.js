//* NO-SQL Document Based Database
//* Strong Support for Aggregation Pipes
//* Works oin BSON format
//* Best for Node Application

//? show dbs -> Shows all the databases that are present.
//? use <db_name> -> to switch to a another datbase. by default you will be on "test" database.
//? show collections -> shows all the collection in the current database.
//? db.coll.find({}) -> shows all the values in that collection
//? db.coll.insert({}) -> insert the following object to that collection.


const express = require('express');
const mongoose = require("mongoose")
const fs = require('fs');
const app = express();

//mongo DB connection
mongoose.connect('mongodb://localhost:27017/myDB')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

//Schema
const userSchema=mongoose.Schema({
    firstName:{
        type: String,
        required:true,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    jobTitle:{
        type: String,
    },
    gender:{
        type: String,
    }
});

//Model
const User=mongoose.model('user',userSchema)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const users = require('./MOCK_DATA.json');

//Rest API
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    return res.send(html);
});



app.get('/api/users',(req,res)=>{
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

//make this asyncronous (async-await)
app.post('/api/users', async (req, res) => {
    const body = req.body;
    
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title)
        return res.status(400).json({field:"missing"});

    const result=await User.create({    //? this creates this user and return that object
        firstName: body.first_name,
        lastName: body.last_name,
        gender:body.gender,
        email:body.email,
        jobTitle:body.job_title,
    });
    console.log("user added ",result);
    
    return res.status(201).json({msg:"success"});
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});