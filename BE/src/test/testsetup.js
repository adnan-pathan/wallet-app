import * as dotenv from "dotenv"; 
import mongoose from "mongoose";

let mongo;
dotenv.config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URl);
});

afterAll(async () => {
  if (mongo) {
    await mongo.stop();
  }
  await mongoose.connection.close();
});
