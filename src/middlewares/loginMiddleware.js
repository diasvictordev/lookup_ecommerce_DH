function auth(req, res, next) {
  if (!Boolean(req.session.user)) {
    return next()
  } 

  res.render('user', {user: req.session.user})
}

module.exports = auth