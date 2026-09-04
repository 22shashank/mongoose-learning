import monogoose from "mongoose";

const productSchema = new mongoose.Schema({},{timestamps:true});

desription:{
    required:true,
    type:string
},
name:{
    required:true,
    type:string
},
productImage:{
    type:String

},
price:{
    type:Number,
    default:0
},
stock:{
    type:Number,
    default:0
},category:{
    type:mongoose.Shema.Types>objectId,
    ref:"Category"
    required:true,
},
owner:{
    type:mongoose.Schmea.Types.ObjectId,
    ref:"user"
    
}

}

export const Product = mongoose.model("Product",productSchema);

