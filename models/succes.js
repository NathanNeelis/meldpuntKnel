const mongoose = require("mongoose");

const succesSchema = new mongoose.Schema({
  melder: {
    type: String,
    required: false,
  },
  initials_melder: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  omschrijving: {
    type: String,
    required: false,
  },
  datum: {
    type: String,
    required: false,
  },
});

const Successen = mongoose.model("successen", succesSchema);
module.exports = Successen;
