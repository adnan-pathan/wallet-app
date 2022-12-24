import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",
  },
}));

export default function Button(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={props.handleClick} variant="contained" color="primary">
        {props.title}
      </Button>
    </div>
  );
}
