const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: String,
  year: Number,
  description: String,
  ratings: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rating: Number
    }
  ]
});

module.exports = mongoose.model("Movie", MovieSchema);
