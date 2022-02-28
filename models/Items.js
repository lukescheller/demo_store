const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
