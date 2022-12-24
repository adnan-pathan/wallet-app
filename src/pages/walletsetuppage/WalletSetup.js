import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
  maincontainer: {
    height: "500px",
    width: "500px",
  },
  walletsetupform: {
    height: "100%",
    width: "100%",
  },
  title: {},
}));

export default function ShowTransactions() {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.maincontainer}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="row"
        spacing={3}
        className={classes.walletsetupform}
      >
        <Grid container alignItems="center" justifyContent="center" item xs={12} className={classes.title}>
          <h3>Initialise Wallet</h3>
        </Grid>
      </Grid>
    </Paper>
  );
}
