//console.log("Hello world");

// Importing a library.
const express = require("express");
const bodyparser = require("body-parser");

// initialize the express.
const app = express();
const port = 3000;

// Add middleware
app.use(bodyparser.json());

// Create a get request
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/hello", function (req, res) {
  var name = req.body.name;
  res.send(`Hi ${name}`);
});

app.listen(port);
console.log(`Start listening @ port ${port}`);
