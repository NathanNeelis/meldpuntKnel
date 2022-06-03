const User = require("../models/user");
const Verbazingen = require("../models/verbazing");
const Successen = require("../models/succes");
const WijkKliniek = require("../models/wijkkliniek");
const getCurrentDate = require("../views/utils/getCurrentDate");

// export
async function home(req, res) {
  const user = await User.findOne({
    email: req.session.user.user.email,
  });

  const verbazingen = (await Verbazingen.find()).reverse();
  const successen = (await Successen.find()).reverse();
  const wijkkliniek = await WijkKliniek.find();

  const initials = user.firstName.charAt(0) + user.lastName.charAt(0);
  const currentDate = getCurrentDate();
  const expertise = user.expertise.split(",");

  renderPage();

  function renderPage() {
    res.render("components/organisms/home.ejs", {
      // data
      userFirstName: user.firstName,
      userLastName: user.lastName,
      userEmail: user.email,
      userFunctie: user.functie,
      userInitials: initials,
      userExpertise: expertise,
      currentDate: currentDate,

      verbazingen: verbazingen,
      successen: successen,
      wijkkliniek: wijkkliniek[0],
    });
  }
}

module.exports = home;
