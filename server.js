const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;
const DB_CONNECTION = require("./config/connect");

DB_CONNECTION();

app.use(express.json({ extended: false }));
app.use(cors({ origin: "*" }));

app.listen(port, () => console.log(`server running on port: ${port}`));
