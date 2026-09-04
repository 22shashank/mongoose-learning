import mongoose from "mongoose"

connst subTodoSchema = new mongoose.Schema({
    type:Boolen,
    default:false
},
ccreatedBY:{
    type:mongoose.Schema.Types.objectId,
    ref: "user"
},
subTodos: [
    {
        t    }
]
},{timestamps:true});

export const Todo = mongoose.model('Todo',TodoSchema);

}
)
