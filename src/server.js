const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(",");

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB 🎉"))
  .catch((err) => console.error("Error connecting to MongoDB: ", err.message));

const usersRoutes = require("./routes/users");
app.use("/api/users", usersRoutes);

app.get("/", (req, res) => res.send("Server is running 🚀"));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
