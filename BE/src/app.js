import express from "express";
import BodyParser from "body-parser";
import cookieSession from "cookie-session";

import { fetchtransactionsrouter } from "./routes/fetchtransactions.js";
import { setupWalletRouter } from "./routes/setup.js";
import { transactionRouter } from "./routes/transaction.js";
import { getWalletRouter } from "./routes/getwallet.js";

const app = express();
app.set("trust proxy", true);
app.use(BodyParser.json());

//CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use(fetchtransactionsrouter);
app.use(setupWalletRouter);
app.use(transactionRouter);
app.use(getWalletRouter);

export default app;
