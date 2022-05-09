const login = (req, res) => {
  res.render("components/organisms/login.ejs", {
    error: false,
  });
};

module.exports = login;
