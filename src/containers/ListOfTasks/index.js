import React from "react";
import { Grid, Typography, Paper, Button } from "@mui/material";
import Task from "./Task";
import { useDispatch } from "react-redux";
import { clearTasksStart } from "../../redux/Tasks/tasks.actions";

const ListOfTasks = ({ tasks }) => {
  const dispatch = useDispatch();

  const handleClearTasks = () => {
    dispatch(clearTasksStart());
  };

  return (
    <Paper>
      <Typography variant="h4">List of Tasks</Typography>
      <Grid container>
        <Grid item xs={12}>
          <Button variant="outlined" onClick={handleClearTasks}>
            Clear Tasks
          </Button>
        </Grid>
        {tasks &&
          tasks.map((item, pos) => {
            return <Task item={item} key={pos} tasks={tasks} />;
          })}
      </Grid>
    </Paper>
  );
};

export default ListOfTasks;
