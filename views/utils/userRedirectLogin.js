const userRedirectLogin = (req, res, next) => {
  // if user is not logged in, redirect to login page
  if (!req.session.sessionID) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = userRedirectLogin;
