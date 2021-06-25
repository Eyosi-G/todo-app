import { call, put, all, takeLatest } from 'redux-saga/effects'
import request from '../../config/network'
import { CREATE_TASK_ASYNC, DELETE_TASK_ASYNC, LOAD_TASKS, LOAD_TASKS_ASYNC, UPDATE_TASK_ASYNC } from './task_action_types';
import Task from '../../models/task'



function* fetchTaskAsync(){
    const response = yield request("GET",null,"/tasks")
    const tasks = response.map((task)=>{
        return Task.fromJson(task)
    });
    yield put({
        type:LOAD_TASKS,
        payload:tasks
    })
}
function* deleteTaskAsync(action){
    yield request("DELETE",null,`/tasks/${action.payload}`)
    const response = yield request("GET",null,"/tasks")
    const tasks = response.map((task)=>{
        return Task.fromJson(task)
    });
    yield put({
        type:LOAD_TASKS,
        payload:tasks
    })

}
function* createTaskAsync(action){
    yield request("POST",JSON.stringify(action.payload),`/tasks`)
}

function* updateTaskAsync(action){
    yield request("PUT",action.payload.toJSON(),`/tasks`)   
    const response = yield request("GET",null,"/tasks")
    const tasks = response.map((task)=>{
        return Task.fromJson(task)
    });
    yield put({
        type:LOAD_TASKS,
        payload:tasks
    })
}

//watchers

function* watchFetchTask(){
    yield takeLatest(LOAD_TASKS_ASYNC,fetchTaskAsync)
}
function* watchDeleteTask(){
    yield takeLatest(DELETE_TASK_ASYNC,deleteTaskAsync)
}
function* watchCreateTask(){
    yield takeLatest(CREATE_TASK_ASYNC,createTaskAsync)
}
function* watchEditTask(){
    yield takeLatest(UPDATE_TASK_ASYNC,updateTaskAsync)

}
function* rootTaskSaga(){
    yield all([call(watchFetchTask),call(watchDeleteTask),call(watchCreateTask),call(watchEditTask)])
}
export default rootTaskSaga