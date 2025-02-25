import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transactions from "./pages/generatetransaction/Transactions";
import ShowTransactions from "./pages/showtransaction/ShowTransactions";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainApp: {
    height: "100vh",
    width: "100vw",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
  },
  papersize:{
    height: "10vh",
    width: "100vw",
    position: "absolute",
    top : 0
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Grid className={classes.mainApp}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Transactions />} />
          <Route
            path="/showtransactions/:walletId"
            element={<ShowTransactions />}
          />
        </Routes>
      </BrowserRouter>
    </Grid>
  );
}

export default App;
