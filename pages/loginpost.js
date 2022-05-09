const User = require("../models/user");

const loginpost = (req, res) => {
  const findUser = () => {
    User.findOne(
      {
        email: req.body.loginEmail,
      },
      (err, user) => {
        if (err) {
          console.log("MongoDB Error:" + err);
        } else if (user) {
          checkPassword(user);
        } else {
          res.render("components/organisms/login.ejs", {
            error: true,
            email: req.body.loginEmail,
          });
        }
      }
    );
  };

  const checkPassword = (user) => {
    user.comparePassword(req.body.loginPassword, (err, matches) => {
      if (err) {
        console.log(err);
      } else if (matches) {
        req.session.sessionID = user._id;
        req.session.user = {
          user: user,
        };
        res.redirect("/");
      } else if (!matches) {
        res.render("components/organisms/login.ejs", {
          error: true,
          email: req.body.loginEmail,
        });
      }
    });
  };

  if (req.body.loginEmail && req.body.loginPassword) {
    findUser();
  } else {
    res.render("components/organisms/login.ejs", {
      error: true,
      email: req.body.loginEmail,
    });
  }
};

module.exports = loginpost;
