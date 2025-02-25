import express from "express";
import { setupmodel } from "../models/walletmodel.js";

const router = express.Router();

router.get("/transactions/:walletId/:skip?/:limit?", async (req, res) => {
  let walletId = req.params.walletId;
  if (walletId === undefined) { 
    res.status(404).send({ 'message': 'Resource unavailable' });
    return;
  }
  const operation = await setupmodel.find({ _id: walletId });
  res.status(200).send({
    walletId: operation[0]._id,
    balance: operation[0].balance,
    transactions: operation[0]["transactions"],
  });
});

export { router as fetchtransactionsrouter };
