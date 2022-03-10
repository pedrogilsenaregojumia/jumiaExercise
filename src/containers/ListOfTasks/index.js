import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

import PaginationC from "./PaginationC";
import TableOfTasks from "./TableOfTasks";



const useStyles = makeStyles({
  mainContainer: {
    padding: "20px",
  },
  tasksContainer: {
    paddingTop: "20px",
  },
  
});

const ListOfTasks = ({endpoint, setEndpoint, search}) => {
 
  const classes = useStyles();

  const configTableOfTasks = {
    endpoint, setEndpoint, search
  }

  return (
    <Paper className={classes.mainContainer}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">List of Tasks</Typography>
        </Grid>
        
       

        <TableOfTasks {...configTableOfTasks}/>

        <PaginationC />

       
      </Grid>
    </Paper>
  );
};

export default ListOfTasks;
