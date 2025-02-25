import express from "express";
import { Mutex } from "async-mutex";
import { setupmodel } from "../models/walletmodel.js";
const router = express.Router();
const mutex = new Mutex();

router.post("/transact/:walletId", async (req, res) => {
  const { amount, description } = req.body;
  if (amount === undefined) {
    res.status(404).send({ message: "Resource unavailable" });
    return;
  }
  const release = await mutex.acquire();
  let type;
  try {
    if (amount > 0) {
      type = "CREDIT";
    } else {
      type = "DEBIT";
    }
  
    await setupmodel.updateOne(
      {
        _id: req.params.walletId,
      },
      {
        $inc: { balance: amount },
        $push: {
          transactions: {
            amount: amount,
            description: description,
            date: new Date(),
            type: type,
          },
        },
      }
    );
  
    const response = await setupmodel.findById(req.params.walletId);
    res.status(200).send({
      balance: parseFloat(response.balance).toFixed(4),
      transactionId: response.transactions[response.transactions.length - 1]._id,
    });
  } catch (error) {
    console.log(error);
  } finally {
    release();
  }
});

export { router as transactionRouter };
