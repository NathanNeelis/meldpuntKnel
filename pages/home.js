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
  console.log("verbazingen", verbazingen);

  const successen = (await Successen.find()).reverse();
  console.log("successen", successen);

  const wijkkliniek = await WijkKliniek.find();
  console.log("wijkkliniek", wijkkliniek[0]);

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
