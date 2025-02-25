import request from "supertest";
import app from "../../app.js";

it("get the wallet details", async () => {
  await request(app).get("/wallet/63a5bb19af8f1daabd0f9db4").send().expect(200);
});
