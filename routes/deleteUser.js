const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.delete("/", async (req, res) => {
  try {
    // email can be email:email
    let user = await User.findByIdAndRemove(req.body.id);
    res.json({ msg: "user deleted!" });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
