import mongoode frmo "mongoose";

const userSchema = new mongoose.schema({
    username: String 
})

export const user = mongoose.model("user",userSchema)



"Todo"

todos