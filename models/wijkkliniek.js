const mongoose = require("mongoose");

const wijkkliniekSchema = new mongoose.Schema({
  refer: {
    type: Number,
    required: true,
  },
  totaalBedden: {
    type: Number,
    required: true,
  },
  opnames: {
    type: Number,
    required: true,
  },
  ontslagen: {
    type: Number,
    required: true,
  },
});

const WijkKliniek = mongoose.model("wijkkliniek", wijkkliniekSchema);
module.exports = WijkKliniek;
