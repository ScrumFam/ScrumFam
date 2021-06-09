const express = require("express");
const userRouter = require("../../../../server/routes/userRouter"); //import file we are testing
const request = require("supertest"); // supertest is a framework that allows to easily test web apis
const app = express(); //an instance of an express app, a 'fake' express app


app.use("/user", userRouter);

describe("testing-chore-routes", () => {
  it("GET /user - success", async () => {
    
  }