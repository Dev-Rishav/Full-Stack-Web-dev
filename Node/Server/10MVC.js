//? MVC (Model View Controller)

const express = require('express');
const app = express();
const userRouter=require("./routes/user")
const {connectMongoDB}=require("./connection");
const {longReqRes} = require("./middlewares/index");

//connection
connectMongoDB('mongodb://localhost:27017/myDB')
.then(()=> console.log("MongoDB connected" )
);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Custom Middleware
app.use(longReqRes("log.txt"));

//Routes
app.use("/user",userRouter);    //if the route is user then use userRouter


const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});