function auth(req, res, next) {
  if (!Boolean(req.session.user)) {
    return next()
  } 

  res.render('user')
}

module.exports = auth