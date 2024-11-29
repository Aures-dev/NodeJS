const express = require("express");
const path = require("path");

const app = express();
const port = 5100;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/home.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/about.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/contact.html"));
});
app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/services.html"));
});

app.get("/download", (req, res) => {
  res.download("app.js");
});

app.get("/status", (req, res) => {
  res.status(400);
  res.send("Erreur client");
});

app.listen(port, () => {
  console.log(`listening on the port ${port}....`);
});
