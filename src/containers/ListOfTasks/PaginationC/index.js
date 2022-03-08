import React from "react";
import { Pagination, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";

const mapState = (state) => ({
  count: state.tasksData.count,
});

const useStyles = makeStyles({
  paginationContainer: {
    paddingTop: "20px",
  },
});

const PaginationC = () => {
  const classes = useStyles();
  const { count } = useSelector(mapState);

  return (
    <Grid
      item
      xs={12}
      container
      justifyContent="center"
      className={classes.paginationContainer}
    >
      <Pagination shape="rounded" page={1} count={parseInt(count / 10) + 1} />
    </Grid>
  );
};

export default PaginationC;
