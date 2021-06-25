import {combineReducers} from 'redux'
import taskReducer from './task/task_reducer';

const rootReducer = combineReducers({
    task:taskReducer
})

export default rootReducer;