const User = require("../models/user");

// export
async function home(req, res) {
  const user = await User.findOne({
    email: req.session.user.user.email,
  });

  renderPage();

  function renderPage() {
    res.render("components/organisms/home.ejs", {
      // data
      userFirstName: user.firstName,
      userLastName: user.lastName,
    });
  }
}

module.exports = home;
