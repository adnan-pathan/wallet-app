import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { Grid, Switch, makeStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledToggle = withStyles((theme) => ({
  "&.Mui-selected": {
    color: "green",
    backgroundColor: "green",
  },
}))(ToggleButton);

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 27,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(Switch);

export default function ToggleButtonComponent(props) {
  const [selected, setSelected] = React.useState(false);
  const handleValueChange = () => {
    setSelected(!selected);
    props.handleChange(!selected);
  };

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12} container alignItems="center" justifyContent="center">
        <IOSSwitch
          value="check"
          selected={selected}
          label={props.label}
          onChange={handleValueChange}
        >
          <CheckIcon />
        </IOSSwitch>
      </Grid>
      <Grid item xs={12} container alignItems="center" justifyContent="center">
        {selected ? "Credit" : "Debit"}
      </Grid>
    </Grid>
  );
}
