import Grid from "@material-ui/core/Grid";
import MUIDataTable from "mui-datatables";
import ButtonComponent from "../../components/button/Button.js";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { fetchTransaction } from "../../services/walletservice.js";

const useStyles = makeStyles(() => ({
  tableSize: {
    height: "100%",
    width: "100%",
  },
  buttoncontainer: {
    height: "450px",
    width: "450px",
  },
  containerSize: {
    height: "80%",
    width: "100%",
  },
}));

export default function ShowTransactions() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const columns = ["ID", "Date", "Type", "Amount"];

  const handleSubmit = () => {
    navigate(`/`);
  };

  useEffect(() => {
    fetchTransaction()
      .then((data) => {
        if (data !== undefined) {
          let tempData = [];
          for (let i = 0; i < data["data"]["transactions"].length; ++i) {
            let tempVal = [];
            tempVal.push(data["data"]["transactions"][i]["_id"]);
            tempVal.push(data["data"]["transactions"][i]["date"]);
            tempVal.push(data["data"]["transactions"][i]["type"]);
            tempVal.push(data["data"]["transactions"][i]["amount"]);
            tempData.push(tempVal);
          }
          setData(tempData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
      <Grid container alignItems="center" justifyContent="center" item xs={11}>
        <MUIDataTable
          className={classes.tableSize}
          title={"Transactions"}
          data={data}
          columns={columns}
        />
      </Grid>
      <Grid container alignItems="center" justifyContent="center" item xs={11}>
        <ButtonComponent
          title="Generate new Transaction"
          handleClick={handleSubmit}
        />
      </Grid>
    </Grid>
  );
}
