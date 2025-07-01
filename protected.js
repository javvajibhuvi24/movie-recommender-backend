const express = require("express");
const router = express.Router();

// Example protected route
router.get("/dashboard", (req, res) => {
  res.send("This is the protected dashboard route!");
});

module.exports = router;
