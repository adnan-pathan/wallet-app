import express from "express";
import { setupmodel } from "../models/walletmodel.js";

const router = express.Router();

router.post("/setup", async (req, res) => {
  const { name, balance } = req.body;
  if (name === undefined || name === '') {
    res.status(404).send({ message: "Resource unavailable" });
    return;
  }
  if (balance === undefined) {
    res.status(404).send({ message: "Resource unavailable" });
    return;
  }
  const wallet = new setupmodel({
    name: name,
    balance: balance,
    date: new Date(),
    transactions: [],
  });
  await wallet.save();
  res.status(200).send({
    id: wallet._id,
    balance: wallet.balance,
    name: wallet.name,
    date: wallet.date,
  });
});

export { router as setupWalletRouter };