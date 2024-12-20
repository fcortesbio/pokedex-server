// IMPORTS
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
process.loadEnvFile();

// APP CONFIG
const app = express();
const PORT = process.env.PORT || 5000;

app.set("port", PORT);

// SERVE TEST
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

// MIDDLEWARES
app.use(
  morgan(
    ":method :url :status :res[content-lenght] - :response-time ms :date[web]"
  )
);
app.use(express.json());

// ROUTES

// DATABASE CONNECTION
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.error("Unable to connect to DB", err);
  });
