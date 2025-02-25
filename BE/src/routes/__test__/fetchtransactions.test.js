import request from "supertest";
import app from "../../app.js";

it("responds with the recent transactions", async () => {
  await request(app)
    .get(`/transactions/63a5bb19af8f1daabd0f9db4/1/10`)
    .send()
    .expect(200);
});
