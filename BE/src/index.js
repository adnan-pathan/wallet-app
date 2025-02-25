import * as dotenv from 'dotenv';
import mongoose from "mongoose";

import app from "./app.js";

dotenv.config();

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URl);
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
};

start();
