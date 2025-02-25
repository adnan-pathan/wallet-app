import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    height: "95%",
    width: "95%",
    margin: "auto",
  },
}));

export default function ButtonComponent(props) {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      onClick={props.handleClick}
      variant="contained"
      color={props.color === undefined ? "primary" : props.color}
    >
      {props.title}
    </Button>
  );
}
