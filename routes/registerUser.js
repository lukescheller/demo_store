const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// you don't have to write the path with config - config is special so it just knows
const config = require("config");

//this created a new db within my cluster called myFirstDatabase
const User = require("../models/User");

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // email can be email:email
    let user = await User.findOne({ email });
    if (user) {
      // works
      return res.status(400).json({ error: "user already exists" });
    }

    //this is destructured
    user = new User({
      username,
      email,
      password,
    });

    // encrypt password - bcrypt
    const salt = await bcrypt.genSalt(10);
    // the email is hashed at this point
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    //token creation
    const payload = {
      user: {
        // in mongodb it'll show up as _id but you can use id
        id: user.id,
      },
    };

    //this is the token that's being created - I'm guessing this is being sent to the front end
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        // this is what's being returned to the frontend when a user is registered
        // the front end will have to be able to read the token and put it into redux
        res.json({ token });
      }
    );
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
