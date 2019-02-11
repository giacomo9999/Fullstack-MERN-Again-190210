const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const port = process.env.PORT || 4000;
const cors = require("cors");
require("dotenv").config();
const ServerPortRouter = require("./routes/ServerPortRouter");

mongoose.connect(config.DB, { useNewUrlParser: true }).then(() => {
  console.log("Connected to database."),
    err => {
      console.log("Cannot connect to database.");
    };
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/serverport", ServerPortRouter);

app.get("/test", (req, res) => res.send("Here I am at the test endpoint."));
app.get("/", (req, res) => res.send("Hello World!"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log("Server running on the following port", PORT);
});
