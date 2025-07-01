require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Routes
app.use("/api/auth", require("./routes/auth")); // Important
app.use("/api/protected", require("./routes/protected"));
app.use("/api/movies", require("./routes/movies"));

// Start server
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
