import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { initTransaction, getWallet } from "../../services/walletservice.js";
import Paper from "@material-ui/core/Paper";
import TextField from "../../components/textfield/TextField.js";
import ButtonComponent from "../../components/button/Button.js";
import ToggleButtonComponent from "../../components/togglebutton/ToggleButtonComponent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const useStyles = makeStyles(() => ({
  maincontainer: {
    height: "600px",
    width: "600px",
  },
  walletsetupform: {
    height: "100%",
    width: "100%",
  },
  cardheadertextstyle: {
    fontSize: "20px",
    fontWeight : "bold"
  },
}));

export default function GenerateTransaction() {
  const [balance, setBalance] = useState(0);
  const [walletname, setWalletName] = useState(0);

  const classes = useStyles();
  let amount = 0;
  let transactionType = true;
  const navigate = useNavigate();

  const handleShowTransactionButton = () => {
    navigate(`/showtransactions/${localStorage.getItem("walletID")}`);
  };

  const handleSubmit = () => {
    if (
      amount <= 0 ||
      transactionType === "" ||
      transactionType === undefined
    ) {
      alert("Please fill out the details properly");
      return;
    }
    if (transactionType === false) {
      amount = -Math.abs(amount);
    }
    initTransaction({
      amount: amount,
      type: transactionType ? "CREDIT" : "DEBIT",
    })
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
    amount = 0;
    transactionType = true;
  };
  const handleAmountChange = (amountinchild) => {
    amount = amountinchild;
  };
  const handleTypeChange = (type) => {
    transactionType = type;
  };
  useEffect(() => {
    getWallet()
      .then((data) => {
        setWalletName(data["data"]["name"]);
        setBalance(data["data"]["balance"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            item
            xs={6}
            className={classes.cardheadertextstyle}
          >
            {" "}
            Wallet :- {walletname}{" "}
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            item
            xs={6}
            className={classes.cardheadertextstyle}
          >
            {" "}
            Balance :- {balance}{" "}
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
          className={classes.title}
        >
          <h3>Generate Transactions</h3>
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
          <ToggleButtonComponent
            label={transactionType ? "Credit" : "Debit"}
            handleChange={handleTypeChange}
            value={transactionType}
          />
        </Grid>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <ButtonComponent title="Generate" handleClick={handleSubmit} />
        </Grid>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <ButtonComponent
            title="Show Transactions"
            handleClick={handleShowTransactionButton}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
