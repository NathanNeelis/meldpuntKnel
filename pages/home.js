const User = require("../models/user");
const getCurrentDate = require("../views/utils/getCurrentDate");

// export
async function home(req, res) {
  const user = await User.findOne({
    email: req.session.user.user.email,
  });

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
    });
  }
}

module.exports = home;
