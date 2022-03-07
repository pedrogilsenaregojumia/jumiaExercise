import React from "react";
import Header from "../../components/Header";
import ListOfTasks from "../../containers/ListOfTasks";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Grid container>
          <Grid item xs={6}>
            <ListOfTasks />
          </Grid>
          <Grid item xs={6}>
            Add new task
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MainPage;
