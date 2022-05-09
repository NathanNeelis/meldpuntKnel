function logout(req, res, next) {
    req.session.destroy(function (err) {
        if (err) {
            next(err)
        } else {
            res.redirect("/login")
        }
    })
}

module.exports = logout;