import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Container } from "@mui/material";

const useStyles = makeStyles({
  header: {
    paddingTop: "40px",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h3" className={classes.header}>
        TODO App
      </Typography>
    </Container>
  );
};

export default Header;
