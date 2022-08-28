function cartAuth(req, res, next) {
    if (Boolean(req.session.user)) {
      return next()
    } 
  
    res.render('login')
  }
  
  module.exports = cartAuth