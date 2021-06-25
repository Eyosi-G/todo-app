import React, { useEffect, useState } from "react";
import { Container, TextField, Grid, Box,Button,Typography} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import {connect} from 'react-redux'
import {createTask,updateTask} from '../redux/task/task_action'
import Task from "../models/task";
const AddEditTask = ({dispatchEditTask,dispatchCreateTask}) => {
  const history = useHistory()
  const [title, setTitle] = useState("")
  const [description,setDescription] = useState("")
  const { state } = useLocation()

  useEffect(()=>{
      setTitle(state ? state.title :  "")
      setDescription(state ? state.description : "")
  },[])

  const onSubmitHandler = (e)=>{
      e.preventDefault()
      if(state){        
          const task = new Task({
              id:state.id,
              description:description,
              title:title,
              isCompleted:state.isCompleted
          });
          console.log(task)
        dispatchEditTask(task)
      }else{
        dispatchCreateTask(title,description)
      } 
      history.push('/')


  }
  const onCancelHandler = (e)=>{
      history.push('/')

  }
  const titleChangeHandler = (e)=>{
      setTitle(e.target.value)
  }
  const descriptionChangeHandler = (e)=>{
      setDescription(e.target.value)
  }

  return (
      <Container>
      <Box mt={5}/>
      <Typography >{state ? "Edit" : "Create"} Task</Typography>
      <Box mt={1}/>
        <form onSubmit={onSubmitHandler}>
          <Grid container direction="column" justify="center">
                <TextField value={title} variant="outlined" onChange={titleChangeHandler} placeholder="title"/>
                <Box mt={2}/>
                <TextField value={description} onChange={descriptionChangeHandler} multiline variant="outlined" rows={4} placeholder="description"/>
                <Box mt={2}/>
                <Grid container justify="flex-end">
                    <Button color="secondary" variant="contained" onClick={onCancelHandler}>Cancel</Button>
                    <Box mr={2}/>
                    <Button type="submit" variant="contained">Save</Button>
                </Grid>
          </Grid>
        </form>
      </Container>
  );
};
const mapDispatchToProps = (dispatch)=>{
    return {
        dispatchCreateTask:(title,description)=>dispatch(createTask(title,description)),
        dispatchEditTask:(task)=>dispatch(updateTask(task))
    }
}
export default connect(null,mapDispatchToProps)(AddEditTask);
