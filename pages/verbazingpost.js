const Verbazingen = require("../models/verbazing");

// register data to database
function verbazingMelden(req, res, next) {
  const melding = {
    melder: req.body.melder,
    melding_datum: req.body.melding_datum,
    situatie: req.body.situatie,
    verantwoordelijke: req.body.verantwoordelijke,
    omschrijving_verbeteractie: req.body.omschrijving_verbeteractie,
    omschrijving_geslaagd: req.body.omschrijving_geslaagd,
    evaluatie_datum: req.body.evaluatie_datum,
    herevaluatie_datum: req.body.evaluatie_datum,
    verbazing_status: req.body.verbazing_status,
    vermelden: req.body.vermelden,
  };

  const meldingArray = [];
  meldingArray.push(melding);

  Verbazingen.findOne(
    {
      title: req.body.title,
    },
    (err, verbazing) => {
      if (err) {
        console.log("MongoDB Error:" + err);
      } else if (verbazing) {
        console.log("error: verbazing already in database");
        res.render("home.ejs", {
          meldingError: "Er is al een verbazing met deze titel gemeld.",
        });
      } else {
        Verbazing.create(
          {
            title: req.body.title,
            melding: meldingArray,
            status: req.body.status,
          },
          done
        );
      }
    }
  );

  function done(err, data) {
    if (err) {
      next(err);
    } else {
      res.redirect("/");
    }
  }
}

module.exports = verbazingMelden;
