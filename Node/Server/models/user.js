const mongoose = require("mongoose")


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
},{timestamps:true});   

//Model
const User=mongoose.model('user',userSchema)


module.exports = User