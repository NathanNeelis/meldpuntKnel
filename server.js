require("dotenv").config();

const port = process.env.PORT || 3000;
const express = require("express");
const bodyParser = require("body-parser"); // load body parser for http requests
const compression = require("compression"); // compression pages
const path = require("path"); // path for easy paths
const app = express(); // save express to app variable
const session = require("express-session"); // sessions for login cookie

// database connection
const connectMDB = require('./config/mongooseConfig') // load Mongoose config
connectMDB(); // connect with database

// routing
const home = require("./pages/home");
const login = require("./pages/login");
const register = require("./pages/register");
const registerPage = require("./pages/registerPage");
const loginpost = require('./pages/loginpost')
const logout = require('./pages/logout');
const offline = require('./pages/offline');

// Utils
const userRedirectLogin = require('./views/utils/userRedirectLogin');

// Static path, compression, bodyparser and sessions
app
  .use(express.static(path.resolve("public")))
  .use(compression())
  .use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
  .use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: process.env.SESSION_SECRET,
    })
  );

app.get("/", userRedirectLogin, home)
    .get("/register", registerPage)
    .get("/login", login)
    .get("/logout", logout)
    .get("/offline", offline);

app.post("/register", register)
    .post("/login", loginpost);

app.listen(port, () => {
  console.log(`Server is working at http://localhost:${port}`);
});