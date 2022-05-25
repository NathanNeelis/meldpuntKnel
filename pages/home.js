const User = require("../models/user");

// export
async function home(req, res) {
  const user = await User.findOne({
    email: req.session.user.user.email,
  });

  const initials = user.firstName.charAt(0) + user.lastName.charAt(0);

  renderPage();

  function renderPage() {
    res.render("components/organisms/home.ejs", {
      // data
      userFirstName: user.firstName,
      userLastName: user.lastName,
      userInitials: initials,
    });
  }
}

module.exports = home;
