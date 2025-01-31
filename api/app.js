const express = require("express");
const dotenv = require("dotenv");
const cors = require("./config/cors");
const connectDB = require("./config/database");
const routes = require("./routes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors);
connectDB();

app.use("/api/v1", routes);

app.get("/", (req, res) => res.send("Server is running 🚀"));

module.exports = app;
