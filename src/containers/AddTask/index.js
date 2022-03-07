import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { TextField, Typography, Grid, Button } from "@mui/material";
import { addTaskStart } from "../../redux/Tasks/tasks.actions";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles({
  inputsContainer: {
    paddingTop: "10vh",
    paddingBottom: "10vh",
  },
});

const AddTask = ({ tasks }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAddTask = () => {
    const newTasksArray = [...tasks];
    newTasksArray.push(title);
    dispatch(addTaskStart(newTasksArray));
  };

  return (
    <Paper>
      <Typography variant="h4">Add New Task</Typography>
      <Grid container spacing={2} className={classes.inputsContainer}>
        <Grid item xs={12}>
          <TextField label="Title" variant="outlined" onChange={handleTitle} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" onClick={handleAddTask}>
            Add+
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddTask;
