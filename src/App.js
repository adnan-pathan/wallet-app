import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transactions from "./pages/generatetransaction/Transactions";
import ShowTransactions from "./pages/showtransaction/ShowTransactions";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  mainApp: {
    height: "100vh",
    width: "100vw",
  },
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
