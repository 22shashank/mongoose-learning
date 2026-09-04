import mongoose from "mongoose"

const userSchema = new mongoose.Schema({},{timestamps:true});

username:{
    type:string,
    required:true

},
password:{
    type:string,
    required:true,
},
export const user  = mongoose.model("user",userSchem)