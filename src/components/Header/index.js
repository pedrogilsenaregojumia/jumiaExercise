import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Container } from "@mui/material";

const useStyles = makeStyles({
  header: {
    paddingTop: "40px",
  },
  devEndpoint: {
    color: "red",
  },
});

const Header = ({ devEndpoint }) => {
  const classes = useStyles();

  return (
    <Container>
      <Typography data-testid="header" variant="h3" className={classes.header}>
        TODO App
      </Typography>
      {devEndpoint && (
        <Typography
          data-testid="dev-endpoint-header"
          variant="h6"
          className={classes.devEndpoint}
        >
          Development Endpoint Mode
        </Typography>
      )}
    </Container>
  );
};

export default Header;
