import express from "express";
import { setupmodel } from "../models/walletmodel.js";

const router = express.Router();

router.get("/wallet/:walletId", async (req, res) => {
  let walletId = req.params.walletId;
  if (walletId === undefined) {
    res.status(404).send({ message: "Resource unavailable" });
    return;
  }
  const operation = await setupmodel.findById(walletId);
  res.status(200).send({
    id: operation._id,
    balance: operation.balance,
    name: operation.name,
    date: operation.date,
  });
});

export { router as getWalletRouter };
