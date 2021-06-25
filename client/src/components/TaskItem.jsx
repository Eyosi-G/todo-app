import React, { useState } from 'react'
import {Accordion, AccordionSummary, AccordionDetails, AccordionActions,Button,Checkbox,FormControlLabel} from '@material-ui/core'
import {Delete,ExpandMore,Edit} from '@material-ui/icons'
import {connect} from 'react-redux'
import {deleteTask, updateTask} from '../redux/task/task_action'
import { useHistory } from 'react-router-dom'
import Task from '../models/task'
const TaskItem = ({task,disptchDeleteTask,dispatchUpdateTask}) => {
    const history = useHistory()
    const onDeleteHandler = ()=>{
        disptchDeleteTask(task.id)

    }
    const onEditHandler = ()=>{
        history.push({
            pathname:"/edit",
            state:task
        });
    }

    const onSelectHandler = (e)=>{
        dispatchUpdateTask(new Task({
            id:task.id,
            description:task.description,
            title:task.title,
            isCompleted:e.target.checked
        }))
        
    }
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
            <FormControlLabel
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()}
                control={<Checkbox onChange={onSelectHandler} checked={task.isCompleted}/>}
                style={{textDecoration: task.isCompleted ? "line-through" : "none"}}
                label={task.title}
            />
            </AccordionSummary>
            <AccordionDetails>
            {task.description}
            </AccordionDetails>
            <AccordionActions>
                <Button onClick={onDeleteHandler} size="small" color="secondary" startIcon={<Delete />}>delete</Button>
                <Button onClick={onEditHandler} size="small" startIcon={<Edit/>}> edit </Button>
            </AccordionActions>
        </Accordion>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return {
        disptchDeleteTask:(id)=>dispatch(deleteTask(id)),
        dispatchUpdateTask:(task)=>dispatch(updateTask(task))
    }
}
export default connect(null,mapDispatchToProps)(TaskItem)
