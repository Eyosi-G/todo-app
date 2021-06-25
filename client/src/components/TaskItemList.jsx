import React, { useEffect } from "react";
import TaskItem from "./TaskItem";
import { loadTasks } from "../redux/task/task_action";
import { connect } from "react-redux";
import {} from "@material-ui/core";
const TaskItemList = ({ tasks, fetchTasks }) => {
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <>
      {tasks.length == 0 ? (
        <h2 style={{textAlign:"center"}}>no tasks</h2>
      ) : (
        tasks.map((task) => {
          return <TaskItem task={task} key={task.id} />;
        })
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.task,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => dispatch(loadTasks()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskItemList);
