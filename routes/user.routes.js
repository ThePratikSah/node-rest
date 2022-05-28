const express = require("express");
const { newUser } = require("../helpers/user");
const router = express.Router();

// adding new user to the database
router.post("/", async (req, res) => {
  return res.status(201).json({
    data: await newUser(req),
  });
});

module.exports = router;
