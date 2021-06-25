import { LOAD_TASKS } from "./task_action_types";

const taskReducer = (state=[],action)=>{
    switch(action.type){
        case LOAD_TASKS:{
            return action.payload
        }
    }
    return state;
}
export default taskReducer;