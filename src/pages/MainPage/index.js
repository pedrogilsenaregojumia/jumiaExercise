import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import ListOfTasks from "../../containers/ListOfTasks";
import Grid from "@mui/material/Grid";
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
  const { tasks } = useSelector(mapState);

  return (
    <div>
      <Header />
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
