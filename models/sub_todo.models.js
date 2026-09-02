import mongoode frmo "mongoose";

const userSchema = new mongoose.schema({
    username: String 
    type:strinng,
    required:true,
    unique:true
    lowercase:true
}
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
},
password:{
    type:String,
    required:[true,"password is required"]
}

)

export const user = mongoose.model("user",userSchema)



"Todo"

todos