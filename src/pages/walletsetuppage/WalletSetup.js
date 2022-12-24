import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { setUpWallet } from "../../services/walletservice.js";
import TextField from "../../components/textfield/TextField.js";
import ButtonComponent from "../../components/button/Button.js";

const useStyles = makeStyles(() => ({
  maincontainer: {
    height: "400px",
    width: "400px",
  },
  walletsetupform: {
    height: "100%",
    width: "100%",
  },
  title: {},
}));

export default function WalletSetup(props) {
  const classes = useStyles();
  let amount = 0;
  let walletName = "";

  const handleSubmit = () => {
    if (amount <= 0 || walletName === "" || walletName === undefined) {
      alert("Please fill out the details properly");
      return;
    }
    setUpWallet({
      balance: amount,
      name: walletName,
    })
      .then((data) => {
        localStorage.setItem("walletID", data["id"]);
        props.setPagetype(localStorage.getItem("walletID"));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAmountChange = (amountinchild) => {
    amount = amountinchild;
  };
  const handleWalletNameChange = (nameinchild) => {
    walletName = nameinchild;
  };
  return (
    <Paper elevation={3} className={classes.maincontainer}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="row"
        className={classes.walletsetupform}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
          className={classes.title}
        >
          <h3>Initialise Wallet</h3>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
        >
          <TextField
            label="Wallet name"
            handleChange={handleWalletNameChange}
            value={walletName}
          />
        </Grid>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            label="Amount(Optional)"
            handleChange={handleAmountChange}
            value={amount}
          />
        </Grid>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <ButtonComponent title="Create Wallet" handleClick={handleSubmit} />
        </Grid>
      </Grid>
    </Paper>
  );
}
