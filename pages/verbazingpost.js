const User = require("../models/user");
const Verbazingen = require("../models/verbazing");
const getCurrentDate = require("../views/utils/getCurrentDate");

// register data to database
async function verbazingMelden(req, res, next) {
  const currentDate = getCurrentDate();
  const user = await User.findOne({
    email: req.session.user.user.email,
  });

  const melding = {
    melder: user.firstName + " " + user.lastName,
    melding_datum: currentDate,
    situatie: req.body.situatie,
    verantwoordelijke: "",
    omschrijving_verbeteractie: "",
    omschrijving_geslaagd: "",
    evaluatie_datum: "",
    herevaluatie_datum: "",
    verbazing_status: 0,
    vermelden: true,
    evaluatie: "",
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
        Verbazingen.create(
          {
            title: req.body.title,
            melding: meldingArray,
            status: 0,
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
