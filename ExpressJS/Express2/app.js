const express = require("express");
const path = require("path");

const port = 9100;

const userRouter = require("./router-users");
const app = express();

app.use("/users", userRouter);

app.get("/", (req, res) => {
  console.log(req.params);
  res.status(200).send(`<h1>Les utilisateurs<h1/><a href="/users">Users<a/>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
