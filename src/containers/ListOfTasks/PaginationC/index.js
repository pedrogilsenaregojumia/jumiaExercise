import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Pagination, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { setPageStart } from "../../../redux/Tasks/tasks.actions";

const mapState = (state) => ({
  count: state.tasksData.count,
  page: state.tasksData.page,
});

const useStyles = makeStyles({
  paginationContainer: {
    paddingTop: "20px",
  },
});

const PaginationC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { count, page } = useSelector(mapState);
  const history = useHistory();

  const handlePaginationChange = (event, value) => {
    history.push(`&page=${value}`);
    dispatch(setPageStart(value));
  };

  return (
    <Grid
      item
      xs={12}
      container
      justifyContent="center"
      className={classes.paginationContainer}
    >
      <Pagination
        shape="rounded"
        page={Number(page) || 1}
        count={parseInt(count / 10) + 1}
        onChange={handlePaginationChange}
      />
    </Grid>
  );
};

export default PaginationC;
