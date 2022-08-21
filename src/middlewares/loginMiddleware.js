function auth(req, res, next) {
  if (req.session.user !== undefined) {
  return next();
  }else{
    res.redirect('/usuario/login')
}}


module.exports = auth