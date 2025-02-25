import request from "supertest";
import app from "../../app.js";

it("initiate a new transaction", async () => {
  await request(app)
    .post("/transact/63a5bb19af8f1daabd0f9db4")
    .send({
      amount: 20,
      description: "New Transaction",
    })
    .expect(200);
});
