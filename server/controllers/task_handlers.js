const { TaskModel } = require("../models/Task");

const createTaskHandler = async (req, res, next) => {
  try {
      console.log(req.body)
    const description = req.body.description;
    const title = req.body.title;
    const task = await TaskModel.create({
      title,
      description,
    });
    res.json(task);
  } catch (error) {
    next(error);
  }
};
const getTasksHandler = async(req,res,next)=>{
    try{
        const tasks = await TaskModel.find()
        res.json(tasks)
    }catch(error){
        console.log(error)
        next(error)
    }
}

const getTaskByIdHandler = async(req,res,next)=>{
    try{
        const {id} = req.params;
        const task = await TaskModel.findById(id)
        res.json(task)
    }catch(error){
        next(error)
    }

}

const updateTaskHandler = async (req,res,next)=>{
    try{
        const id = req.body._id
        const title = req.body.title
        const isCompleted = req.body.isCompleted
        const description = req.body.description

        await TaskModel.findByIdAndUpdate(id,{
            $set:{
                title,
                isCompleted,
                description
            }
        })
        res.status(200).end()
    }catch(error){
        next(error)
    }

}
const deleteTaskHandler = async (req,res,next)=>{
    try{
        const {id} = req.params;
        const task = await TaskModel.findByIdAndDelete(id)
        if(!task){
            return next(new Error("deleting task failed"))
        }
        return res.status(200).end()
    }catch(error){
        next(error)
    }

}
module.exports = {
    createTaskHandler,
    getTasksHandler,
    getTaskByIdHandler,
    updateTaskHandler,
    deleteTaskHandler
}