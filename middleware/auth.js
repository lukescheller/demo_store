const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // token will come from header - you will set this in your front end axios call
  const token = req.header("x-auth-token");
  //if no token
  if (!token) {
    return res.status(401).json({
      msg: "Token not detected",
    });
  }
  try {
    const tokenCheck = jwt.verify(token, config.get("jwtSecret"));
    // this is where the token's being sent - this is how you access it from auth.js
    req.user = tokenCheck.user;
    console.log(req.user);
    next();
  } catch (error) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
