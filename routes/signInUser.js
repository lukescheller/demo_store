const express = require("express");
const router = express.Router();
// middleware
const auth = require("../middleware/auth");
const User = require("../models/User");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Sign In
//within headers you'll need - x-auth-token and content-type: application json
//this route will login a user if it exists within the db
router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // email can be email:email
    let user = await User.findOne({ email });
    //if the user doesn't exist
    if (!user) {
      // works
      // the front end will be able to access this
      return res
        .status(400)
        .json({ error: "this email doesn't exist within the database" });
    }

    //compare passwords

    //token creation - you're creating a token when you sign up and when you log in
    const comparePasswords = await bcrypt.compare(password, user.password);
    if (!comparePasswords) {
      return res.status(400).json({ msg: "token error" });
    }

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
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
