// check if the token is expired
const jwt = require('jsonwebtoken')
module.exports = function(req, res, next) {
  if (req.headers['authorization']) {
    let token = req.headers['authorization'].split(' ')[1]

    // decompose the token => { name: xx, iat: xx, exp: xx }

    let decoded = jwt.decode(token)
    console.log(decoded)
    // check the expired time
    if (token && decoded.exp <= Date.now() / 1000) {
      return res.json({
        code: 401,
        token: false,
        error: 'token expired, please login agian'
      })
    }else{
      return res.json({
        token: true
      })
    }
  }

  next();
}
