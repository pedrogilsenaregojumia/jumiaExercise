import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { addTasksStart, setCountStart } from "../../redux/Tasks/tasks.actions";

import mokTasks from "../../data/mokTasks.json";
import mokTasks2 from "../../data/mokTasks2.json";

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
  const { pageID } = useParams();
  const { tasks } = useSelector(mapState);
  const [devEndpoint, setDevEndpoint] = useState(false);

  const ENDPOINT = "https://toDefine" + pageID;

  const getTasks = async () => {
    try {
      const response = await axios.get(ENDPOINT);
      const data = response.data;
      const count = response.meta.count;
      dispatch(setCountStart(count));
      dispatch(addTasksStart(data));
    } catch {
      setDevEndpoint(true);
      const mokData = pageID === "&page=2" ? mokTasks.data : mokTasks2.data;
      const mokCount = mokTasks.meta.count;
      dispatch(setCountStart(mokCount));
      dispatch(addTasksStart(mokData));
    }
  };

  useEffect(
    () => {
      getTasks();
    },
    //eslint-disable-next-line
    [pageID]
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
