import rootTaskSaga from "./task/task_saga"
import {all,call} from 'redux-saga/effects'
function* rootSaga(){
    yield all([call(rootTaskSaga)])
}
export default rootSaga;