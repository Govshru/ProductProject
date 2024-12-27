import mongoose from "mongoose";


const userSchema =new mongoose.Schema({
    name:{type:String},
    email:{type:String,requried:true,unique:true},
    password:{type:String,requried:true}


})

const User=mongoose.models.User||mongoose.model('User',userSchema)
export default User;