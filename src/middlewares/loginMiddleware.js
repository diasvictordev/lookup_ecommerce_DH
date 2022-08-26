const loginMiddleware = (req, res, next) => {
  if(!req.session.user && !req.cookies.logado) {
      return res.redirect('/usuario/login');
  }
  const user = req.session.user ? 
      JSON.parse(req.session.user) : 
      JSON.parse(req.cookies.logado)

      // console.log(user)

  req.user = user

  next()
}

module.exports = loginMiddleware