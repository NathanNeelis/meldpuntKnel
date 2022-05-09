const User = require("../models/user");

// register data to database
function register(req, res, next) {
  User.findOne(
    {
      email: req.body.signupMail,
    },
    (err, user) => {
      if (err) {
        console.log("MongoDB Error:" + err);
      } else if (user) {
        console.log("error: user already in database");
        res.render("register.ejs", {});
      } else {
        User.create(
          {
            email: req.body.signupMail,
            password: req.body.signupPassword,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            expertise: req.body.experience,
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

module.exports = register;
