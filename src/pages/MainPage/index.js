import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { addTasksStart } from "../../redux/Tasks/tasks.actions";

import mokTasks from "../../data/mokTasks.json";

import Header from "../../components/Header";
import ListOfTasks from "../../containers/ListOfTasks";
import Container from "@mui/material/Container";
import AddTask from "../../containers/AddTask";

const mapState = (state) => ({
  tasks: state.tasksData.tasks,
});

const useStyles = makeStyles({
  mainContainer: {
    marginTop: "10vh",
  },
});

const MainPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { tasks } = useSelector(mapState);
  const [devEndpoint, setDevEndpoint] = useState(false);

  const getTasks = async () => {
    try {
      const response = await axios.get(`https://toDefine`);
      const data = response.data;
      dispatch(addTasksStart(data));
    } catch {
      setDevEndpoint(true);
      dispatch(addTasksStart(mokTasks));
    }
  };

  useEffect(
    () => {
      getTasks();
    },
    //eslint-disable-next-line
    []
  );

  return (
    <div>
      <Header devEndpoint={devEndpoint} />
      <Container className={classes.mainContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <ListOfTasks tasks={tasks} />
          </Grid>
          <Grid item xs={12} md={6}>
            <AddTask tasks={tasks} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MainPage;
