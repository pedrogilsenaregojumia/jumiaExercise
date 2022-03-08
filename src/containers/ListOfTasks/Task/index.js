import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { removeTaskStart } from "../../../redux/Tasks/tasks.actions";

const Task = ({ item }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(removeTaskStart(item));
  };

  return (
    <Grid item xs={12}>
      <Paper draggable={true}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={9}>
            <Typography>{item.title}</Typography>
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
