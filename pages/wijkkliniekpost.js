const Wijkkliniek = require("../models/wijkkliniek");

// register data to database
async function wijkkliniekEdit(req, res, next) {
  let totaalBeddenInput = parseInt(req.body.totaalBeddenInput);
  let opnamesInput = parseInt(req.body.totaalOpnameInput);
  let ontslagenInput = parseInt(req.body.totaalOntslagInput);

  Wijkkliniek.findOne(
    {
      refer: 1,
    },
    (err, wijkkliniek) => {
      if (err) {
        console.log("MongoDB Error:" + err);
      } else if (wijkkliniek) {
        Wijkkliniek.updateOne(
          {
            refer: 1,
          },
          {
            $set: {
              totaalBedden: totaalBeddenInput,
              opnames: opnamesInput,
              ontslagen: ontslagenInput,
            },
          },
          done
        );
      } else {
        Wijkkliniek.create(
          {
            refer: 1,
            totaalBedden: totaalBeddenInput,
            opnames: totaalOpnameInput,
            ontslagen: totaalOntslagInput,
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

module.exports = wijkkliniekEdit;
