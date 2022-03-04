const express = require("express");
const router = express.Router();
// middleware
const auth = require("../middleware/auth");
const User = require("../models/User");

router.put("/", auth, async (req, res) => {
  try {
    const user = await User.updateOne(
      { _id: req.user.id },
      { $push: { purchases: { $each: req.body.checkout } } }
    );
    res.status(200).json({ msg: "Purchases successfuly added" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
