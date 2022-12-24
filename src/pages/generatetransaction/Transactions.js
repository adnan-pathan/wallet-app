import Grid from "@material-ui/core/Grid";
import WalletSetup from "../walletsetuppage/WalletSetup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
  },
}));

export default function Transactions() {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="row"
      spacing={3}
      className={classes.container}
    >
      <WalletSetup />
    </Grid>
  );
}
