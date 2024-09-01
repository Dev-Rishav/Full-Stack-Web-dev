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
},{timestamps:true});   //timestamps attach two new attributes i.e. createdAt and updatedAt to organize things more symmetrically.

//Model
const User=mongoose.model('user',userSchema)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rest API
app.get('/users', async(req, res) => {
    const allDBUsers= await User.find({});  //* returns all the objects that are present on  User collection 
    const html = `
    <ul>
        ${allDBUsers.map((user) => `<li>${user.firstName}</li>`).join("")}
    </ul>`;
    return res.send(html);
});



app.get('/api/users',async (req,res)=>{
    const allDBUsers = await User.find({});
    return res.json(allDBUsers);
})



app.route("/api/users/:id")
    .get(async (req, res) => {
        const user = await User.findById(req.params.id);    //*search the collection for that particular ID.
        if(!user)
            return res.status(404).json({user: "Not Found"});
        return res.json(user);
    })
    .patch(async(req, res) => {
        await User.findByIdAndUpdate(req.params.id,req.body);   //finds and update that object with the object passed as second arguement
        return res.status(200).json({status: "Success"});
    })
    .delete(async(req, res) => {
        await User.findByIdAndDelete(req.params.id);
        return res.json(200).json({status:"success"});
    });

//make this asyncronous (async-await)
app.post('/api/users', async (req, res) => {
    const body = req.body;
    
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title)
        return res.status(400).json({field:"missing"});

    const result= await User.create({    //? this creates this user and return that object
        firstName: body.first_name,
        lastName: body.last_name,
        gender:body.gender,
        email:body.email,
        jobTitle:body.job_title,
    });
    return res.status(201).json({msg:"success"});
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});