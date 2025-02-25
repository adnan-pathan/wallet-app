import mongoose from "mongoose";

const transactionschema = mongoose.Schema({
  amount: Number,
  description: String,
  date: mongoose.Schema.Types.Date,
  type: String,
});

const walletschema = mongoose.Schema({
  name: String,
  balance: Number,
  date: mongoose.Schema.Types.Date,
  transactions: [transactionschema],
});

const setupmodel = mongoose.model("Wallet", walletschema);
export { setupmodel };
