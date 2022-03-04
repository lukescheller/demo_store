const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.port || 5000;
const DB_CONNECTION = require("./config/connect");

DB_CONNECTION();

app.use(express.json({ extended: false }));
app.use(cors({ origin: "*" }));

// app.use("/test", require("./routes/test"));
app.use("/itinerary", require("./routes/itinerary"));
app.use("/register", require("./routes/registerUser"));
app.use("/signin", require("./routes/signInUser"));
app.use("/profile", require("./routes/auth"));
app.use("/checkout", require("./routes/submitPurchase"));

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
