
// IMPORTS
const express = require("express"); // Web Framework
const mongoose = require("mongoose"); // Object-Document Mapper for MongoDB
const morgan = require("morgan"); // Logger
process.loadEnvFile(); // Load .env file into process.env

const pokemonRouter = require("./routes/pokemonStatus"); // Import pokemonStatus router

// APP CONFIG
const app = express(); // Create express app
const PORT = 3000; // connect por to env or 3000

app.set("port", PORT); // Set app port

// SERVE TEST
app.get("/", (req, res) => res.send("Hello World!")); // Serve test
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`)); // Listen on port

// MIDDLEWARES
// app.use(morgan(":method :url :status :res[content-lenght] - :response-time ms :date[web]"));
app.use(morgan("dev")); // Log requests to the console
app.use(express.json()); // Parse JSON bodies

// ROUTES
app.use("/api/pokemon", pokemonRouter); // Use pokemonStatus router


// DATABASE CONNECTION
mongoose // Connect to MongoDB
  .connect(process.env.MONGODB_URI) // .env var MONGODB_URI
  .then(() => {console.log("Connected to Data Base");}) // Log success
  .catch((err) => {console.error("Unable to connect to Data Base", err);}); // Log error

