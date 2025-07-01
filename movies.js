const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose"); // Add this at the top
const Movie = require("../models/Movie");

// Middleware to verify token
function verifyToken(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).send("Access Denied");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(400).send("Invalid Token");
  }
}

// GET all movies (public)
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// POST rate a movie (protected)
router.post("/:id/rate", verifyToken, async (req, res) => {
  // Check if id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send("Invalid movie ID");
  }

  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(404).send("Movie not found");

  const existingRating = movie.ratings.find(r => r.userId.toString() === req.user.id);
  if (existingRating) {
    existingRating.rating = req.body.rating;
  } else {
    movie.ratings.push({ userId: req.user.id, rating: req.body.rating });
  }

  await movie.save();
  res.send("Rating submitted");
});

// POST add a new movie (public)
router.post("/", async (req, res) => {
  try {
    const { title, year, genre } = req.body;
    if (!title || !year || !genre) {
      return res.status(400).send("All fields are required");
    }
    const movie = new Movie({ title, year, genre, ratings: [] });
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;