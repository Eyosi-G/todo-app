import { CREATE_TASK_ASYNC, LOAD_TASKS_ASYNC, UPDATE_TASK_ASYNC, DELETE_TASK_ASYNC } from "./task_action_types"

export const createTask = (title,description)=>{
    return {
        type:CREATE_TASK_ASYNC,
        payload:{
            title,
            description
        }
    }
}
export const updateTask = (task)=>{
    return {
        type:UPDATE_TASK_ASYNC,
        payload:task
    }
}

export const deleteTask = (taskId)=>{
    return {
        type:DELETE_TASK_ASYNC,
        payload:taskId
    }
}
export const loadTasks = ()=>{
    return {
        type:LOAD_TASKS_ASYNC
    }
}