import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { removeTaskStart } from "../../../redux/Tasks/tasks.actions";

const Task = ({ item, pos, tasks }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    const newTasksArray = [...tasks];
    newTasksArray.splice(pos, 1);
    dispatch(removeTaskStart(newTasksArray));
  };

  return (
    <Grid item xs={12}>
      <Paper>
        <Grid container>
          <Grid item xs={9}>
            <Typography>{item}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={handleDeleteTask}>Delete</Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Task;
