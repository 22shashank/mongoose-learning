import mongoose from "mongoose"

onst orderiteemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"

    },
    quantity:{
        type:Number,
        required"true

            }
})

const orderSchrema = new Mongoose.Schema"({
OrderPrice:{

    type:Number,
    required:true
},
customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "user"
},
orderItems:{
    type: [orderItemsS],
    required:true
}
address:{
    types:string,
    required:true
},





},{timestamps:true};

}
}


})