const {Schema, model} = require("mongoose")
const TaskSchema = new Schema({
    title:String,
    description:String,
    isCompleted:{
        type:Schema.Types.Boolean,
        default:false
    }
});

const TaskModel = model("task",TaskSchema);
module.exports.TaskModel = TaskModel;
