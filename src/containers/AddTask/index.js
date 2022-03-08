import React, { useState } from "react";
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
});

const AddTask = ({ tasks }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAddTask = () => {
    dispatch(addTaskStart(title));
  };

  return (
    <Paper className={classes.mainContainer}>
      <Typography variant="h4">Add New Task</Typography>
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
