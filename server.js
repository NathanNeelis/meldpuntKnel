require("dotenv").config();

const port = process.env.PORT || 3000;
const express = require("express");
const bodyParser = require("body-parser"); // load body parser for http requests
const compression = require("compression"); // compression pages
const path = require("path"); // path for easy paths
const app = express(); // save express to app variable
const session = require("express-session"); // sessions for login cookie

// routing
const home = require("./pages/home");

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

app.get("/", home);

app.listen(port, () => {
  console.log(`Server is working at http://localhost:${port}`);
});
