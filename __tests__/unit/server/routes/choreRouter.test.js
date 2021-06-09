// const express = require("express");
// const choreRouter = require("../../../../server/routes/choreRouter"); //import file we are testing
// const request = require("supertest"); // supertest is a framework that allows to easily test web apis
// const app = express(); //an instance of an express app, a 'fake' express app

// app.use("/chores", choreRouter); //routes

// describe("testing-chore-routes", () => {
//   it("GET /chores - success", async () => {
//     const { body } = await request(app).get("/chores"); //uses the request function that calls on express app instance
//     expect(body).toEqual([
//       {
//         id: "NJ",
//         createdBy: "Trenton",
//         assignedTo: "Phil Murphy",
//         household: "NJ",
//         description: "Trenton",
//         createdOn: "Phil Murphy",
//         completedOn: "",
//         verifiedOn: "",
//         reward: "",
//       },
//       {
//         id: "NJ",
//         createdBy: "Trenton",
//         assignedTo: "Phil Murphy",
//         household: "NJ",
//         description: "Trenton",
//         createdOn: "Phil Murphy",
//         completedOn: "",
//         verifiedOn: "",
//         reward: "",
//       },
//       {
//         id: "NJ",
//         createdBy: "Trenton",
//         assignedTo: "Phil Murphy",
//         household: "NJ",
//         description: "Trenton",
//         createdOn: "Phil Murphy",
//         completedOn: "",
//         verifiedOn: "",
//         reward: "",
//       },

//     ]);
//   });
// });