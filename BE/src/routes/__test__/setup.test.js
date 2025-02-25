import request from "supertest";
import app from "../../app.js";

it("sets up the wallet", async () => {
  await request(app)
    .post("/setup")
    .send({
      name: "Test Setup",
      Balance: 20,
    })
    .expect(200);
});
