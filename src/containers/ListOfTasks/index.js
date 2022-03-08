import React from "react";
import { Grid, Typography, Paper, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Task from "./Task";
import PaginationC from "./PaginationC";
import { useDispatch } from "react-redux";
import { clearTasksStart } from "../../redux/Tasks/tasks.actions";

const useStyles = makeStyles({
  mainContainer: {
    padding: "20px",
  },
  tasksContainer: {
    paddingTop: "20px",
  },
});

const ListOfTasks = ({ tasks }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClearTasks = () => {
    dispatch(clearTasksStart());
  };

  return (
    <Paper className={classes.mainContainer}>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h4">List of Tasks</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" onClick={handleClearTasks}>
            Clear Tasks
          </Button>
        </Grid>

        <PaginationC />

        <Grid
          item
          xs={12}
          container
          spacing={2}
          direction="row"
          className={classes.tasksContainer}
        >
          {tasks &&
            tasks.map((item, pos) => {
              return <Task item={item} key={pos} />;
            })}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ListOfTasks;
