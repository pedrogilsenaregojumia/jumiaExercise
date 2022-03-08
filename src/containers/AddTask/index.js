import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { TextField, Typography, Grid, Button } from "@mui/material";
import { addTaskStart } from "../../redux/Tasks/tasks.actions";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles({
  mainContainer: {
    padding: "20px",
  },
  addTaskContainer: {
    paddingTop: "20px",
  },
  postStatus: {
    color: "red",
  },
});

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [postStatus, setPostStatus] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  const ADD_TASK_ENDPOINT = "https://toBeDefined/add";

  const addTasks = async () => {
    try {
      const task = { title: "title" };
      await axios.post(ADD_TASK_ENDPOINT, task);
      setPostStatus("Task Added Sucessfully");
      dispatch(addTaskStart(title));
    } catch (error) {
      if (error.message === "Request failed with status code 422") {
        setPostStatus("Add of Task Failed, probably already exists");
        return;
      }
      setPostStatus("Add of Task Failed");
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAddTask = () => {
    addTasks();
  };

  return (
    <Paper className={classes.mainContainer}>
      <Typography variant="h4">Add New Task</Typography>
      {postStatus && (
        <Typography className={classes.postStatus}>{postStatus}</Typography>
      )}
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        className={classes.addTaskContainer}
      >
        <Grid item xs={8}>
          <TextField label="Title" variant="outlined" onChange={handleTitle} />
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" onClick={handleAddTask}>
            Add+
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddTask;
