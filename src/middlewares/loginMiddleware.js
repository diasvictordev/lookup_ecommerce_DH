function auth(req, res, next) {
  if (!req.session.user !== undefined) {
  return next();
  }else{
    res.render('user');
}}


module.exports = auth