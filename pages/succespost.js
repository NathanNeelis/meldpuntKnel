const User = require("../models/user");
const Succes = require("../models/succes");
const getCurrentDate = require("../views/utils/getCurrentDate");

// register data to database
async function verbazingMelden(req, res, next) {
  const currentDate = getCurrentDate();
  const user = await User.findOne({
    email: req.session.user.user.email,
  });

  const initials = user.firstName.charAt(0) + user.lastName.charAt(0);

  Succes.create(
    {
      melder: user.firstName + " " + user.lastName,
      initials_melder: initials,
      title: req.body.succesTitle,
      omschrijving: req.body.succesOmshrijving,
      datum: currentDate,
    },
    done
  );

  function done(err, data) {
    if (err) {
      next(err);
    } else {
      res.redirect("/#innovation");
    }
  }
}

module.exports = verbazingMelden;
