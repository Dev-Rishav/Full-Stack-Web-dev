//! Rest API- JSON

//GET /api/users- LIst all users
//GET /api/users/1 - Get the user with ID 1
//GET /api/users/2 - Get the user ID 2

//*Instead of hardcoding 1,2 for users we can use dynamic path params

//? Dynamic Path Params
//GET /api/users/:id
//? :id -> this is a variable
//*this : signifies this is a dynamic path params

//POST /api/users - Create new user

//PATCH /api/users/1 - Edit the new user ID 1

//DELETE /api/users/1  - Delete the user with ID 1
//Using mockaroo.com to generate random datas


//! Our goal is to create a hybrid server. So we need to support for mobile phones too. So will create routes for browser as "/api/users" to get the JSON data and for mobile phones or other devices we need to render Server side and send the HTML data.

const users=require('./MOCK_DATA.json')
const fs=require("fs");
const express=require("express");

const app=express();
const PORT=8001;

//Middleware - Plugin
//? basically this plugin/middleware converted the data that is passed from client side to JSON format for express to understand
app.use(express.urlencoded({extended: false}));

// Middleware to parse JSON bodies
app.use(express.json());


//Routes
app.get('/api/users',(req,res) => { //*this is for the browsers
    return res.json(users); //Json() send the json data to front end
})

app.get('/users',(req,res)=>{   //*for mobile phones or other devices that need html document SSR(Server Side Rendered Page)
    const html=`
    <ul>
        ${users.map((user)=> `<li>${user.first_name}</li>`).join("")}
    </ul>`
    //join() is used to join each points with each other hiding the commas b/w them.
    return res.send(html);
})


// app.get("/api/users/:id",(req,res)=>{
//     const id=Number(req.params.id); //retunrs a string thatswhy typecasting explicitly
//     const user=users.find((user)=> user.id === id);
//     return res.json(user);
// })


//! By default browser uses GET methods so, working with POST and other methods a bit problematic. SO we will use Postman to do so.

app.post('/api/users',(req,res)=>{
    const body=req.body;
    // console.log(body);
      //? this gives undefined, actually body was supposed to be the datas that is sent to the server from the client side (here we are using Postman to mimick that data).
    //* it is giving undefined because express does not know that what kind of data is this so, we have to use a middleware(plugin) we will be using the urlencoded() plugin
    
    // users.push(body); //will push the body object to users array
    //!there is a problem that frontend will not be able to assing id automatically to new users so we will find the length and assign that to the new user after incrementing with 1.
    users.push({...body,id:users.length+1}) //spread the object and assingn id
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({staus: 'success',id: users.length})
    })
})

// app.patch('/api/users/:id',(req,res)=>{
//     //TODO update an user
//     return res.json({status:'pending'});

// })

// app.delete('/api/users/:id',(req,res)=>{
//     //TODO delete an user
//     return res.json({status:"pending"})
// })

//? One thing to notice: all the dynamic params have the same route, so we can merge them into one route to handle as per the http request (GET,POST,PATCH..)

app.route("/api/users/:id")

    .get((req,res)=>{
        const id=Number(req.params.id); //retunrs a string thatswhy typecasting explicitly
        const user=users.find((user)=> user.id === id);
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
        // TODO delete a user
        const id=Number(req.params.id);        
        const index=users.findIndex((user)=>user.id===id);
        
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


app.listen(PORT,()=>{console.log("Listening to port 8001");
})