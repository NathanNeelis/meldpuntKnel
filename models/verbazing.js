const mongoose = require("mongoose");

const verbazingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
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
  //   melder: {
  //     type: String,
  //     required: true,
  //   },
  //   melding_datum: {
  //     type: Date,
  //     required: true,
  //   },
  //   situatie: {
  //     type: String,
  //     required: false,
  //   },
  //   verantwoordelijke: {
  //     type: String,
  //     required: false,
  //   },
  //   omschrijving_verbeteractie: {
  //     type: String,
  //     required: false,
  //   },
  //   omschrijving_geslaagd: {
  //     type: String,
  //     required: false,
  //   },
  //   evaluatie_datum: {
  //     type: Date,
  //     required: false,
  //   },
  //   herevaluatie_datum: {
  //     type: Date,
  //     required: false,
  //   },
  //   omschrijving_evaluatie: {
  //     type: String,
  //     required: false,
  //   },
  // vermelden: {
  //     type: Boolean,
  //     required: true,
  //   },
});

const Verbazingen = mongoose.model("verbazingen", verbazingSchema);
module.exports = Verbazingen;
