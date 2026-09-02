import mongoode frmo "mongoose";

const userSchema = new mongoose.schema({})

export const user = mongoose.model("user",userSchema)