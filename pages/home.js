// export
async function home(req, res) {
  renderPage();

  function renderPage() {
    res.render("components/organisms/home.ejs", {
      // data
    });
  }
}

module.exports = home;
