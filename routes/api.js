// backend/routes/api.js

const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

// GET all properties
router.get("/properties", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
