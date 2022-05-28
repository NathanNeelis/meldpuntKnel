const mongoose = require("mongoose");

const verbazingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  melding: {
    type: Array,
    required: true,
  },
  status: {
    type: Number,
    min: 0,
    max: 2,
    required: true,
  },
});

const Verbazingen = mongoose.model("verbazingen", verbazingSchema);
module.exports = Verbazingen;
