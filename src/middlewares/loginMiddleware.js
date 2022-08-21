function auth(req, res, next) {
    const userIslogged = req.session.user;
  
    if(userIslogged != "undefined") {
      return next();
    }
  
    return res.render('login');
  }
  
  module.exports = auth;
    