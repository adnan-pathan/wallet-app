import Grid from "@material-ui/core/Grid";
import WalletSetup from "../walletsetuppage/WalletSetup";
import { makeStyles } from "@material-ui/core/styles";
import GenerateTransaction from "./GenerateTransactions";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
  },
}));

export default function Transactions() {
  const classes = useStyles();
  const [pageType, setPagetype] = useState(localStorage.getItem("walletID"));
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="row"
      spacing={3}
      className={classes.container}
    >
      {pageType !== undefined && pageType !== null ? (
        <GenerateTransaction />
      ) : (
        <WalletSetup setPagetype={setPagetype} />
      )}
    </Grid>
  );
}
