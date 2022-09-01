// const loginMiddleware = (req, res, next) => {
//   if(!req.session.user && !req.cookies.logado) {
//       return res.redirect('/usuario/login');
//   }
//   const user = req.session.user ? 
//       JSON.parse(req.session.user) : 
//       JSON.parse(req.cookies.logado)


// module.exports = loginMiddleware


//       // console.log(user)

//   req.user = user

//   next()
// }


function auth(req, res, next) {
  if (req.session.user !== undefined) {
  return next();
  }else{
    res.redirect('/usuario/login')
}}

module.exports = auth