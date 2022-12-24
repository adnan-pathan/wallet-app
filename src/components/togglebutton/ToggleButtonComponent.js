import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { Grid } from "@material-ui/core";

export default function ToggleButtonComponent(props) {
  const [selected, setSelected] = React.useState(true);
  const handleValueChange = () => {
    setSelected(!selected);
    props.handleChange(!selected);
  };

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12} container alignItems="center" justifyContent="center">
        <ToggleButton
          value="check"
          selected={selected}
          label={props.label}
          onChange={handleValueChange}
        >
          <CheckIcon />
        </ToggleButton>
      </Grid>
      <Grid item xs={12} container alignItems="center" justifyContent="center">
        {selected ? "Credit" : "Debit"}
      </Grid>
    </Grid>
  );
}
