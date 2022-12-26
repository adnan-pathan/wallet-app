import React, { useState, useImperativeHandle, forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
  root: {
    height: "95%",
    width: "95%",
    margin: "auto",
  },
}));

const BasicTextFields = forwardRef((props, ref) => {
  const classes = useStyles();
  const [value, setValue] = useState(props.value);
  const handleValueChange = (e) => {
    setValue(e.target.value);
    props.handleChange(e.target.value);
  };
  useImperativeHandle(ref, () => ({
    clearTextField() {
      setValue("");
    },
  }));

  return (
    <TextField
      className={classes.root}
      id="outlined-basic"
      label={props.label}
      value={value}
      onChange={handleValueChange}
      variant="outlined"
    />
  );
});

export default BasicTextFields;
