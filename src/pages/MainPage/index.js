import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";

import Grid from "@mui/material/Grid";
import { addTasksStart, setCountStart } from "../../redux/Tasks/tasks.actions";

import mokTasks from "../../data/mokTasks.json";
import mokTasks2 from "../../data/mokTasks2.json";

import Header from "../../components/Header";
import ListOfTasks from "../../containers/ListOfTasks";
import Container from "@mui/material/Container";
import KeywordSearch from "../../containers/KeywordSearch";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: "10vh",
  },
});

const MainPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { pageID } = useParams();

  const [devEndpoint, setDevEndpoint] = useState(false);
  const [search, setSearch] = useState("");
  const [endpoint, setEndpoint] = useState("");

  const getTasks = async () => {
    try {
      const response = await axios.get(endpoint);
      const data = response.data;
      const count = response.meta.count;
      dispatch(setCountStart(count));
      dispatch(addTasksStart(data));
    } catch {
      setDevEndpoint(true);
      const mokData =
        pageID === "&page=2"
          ? tasksNormalization(mokTasks.data)
          : tasksNormalization(mokTasks2.data);
      const mokCount = mokTasks.meta.count;
      dispatch(setCountStart(mokCount));
      dispatch(addTasksStart(mokData));
      console.log("NormalizedData:", tasksNormalization(mokTasks2.data));
    }
  };

  const tasksNormalization = (data) => {
    const newArray = [];
    for (let i = 0; i < data.length; i++) {
      const entry = {
        title: data[i].title,
        detail: data[i].detail,
        category: data[i].category.name,
      };
      newArray.push(entry);
    }
    return newArray;
  };

  useEffect(
    () => {
      getTasks();
    },
    //eslint-disable-next-line
    [pageID]
  );

  const configListOfTasks = {
    endpoint,
    setEndpoint,
    search,
  };

  const configSearch = {
    endpoint,
    setEndpoint,
    search,
    setSearch,
  };

  return (
    <div>
      <Header devEndpoint={devEndpoint} />

      <Container className={classes.mainContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <KeywordSearch {...configSearch} />
          </Grid>
          <Grid item xs={12}>
            <ListOfTasks {...configListOfTasks} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MainPage;
