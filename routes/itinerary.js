const express = require("express");
const router = express.Router();

//this created a new db within my cluster called myFirstDatabase
const Items = require("../models/Items");

router.get("/", async (req, res) => {
  try {
    const items = await Items.find();
    res.json(items);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
