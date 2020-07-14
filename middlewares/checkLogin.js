module.exports = {
  // check the login session return json

  checkLogin(req, res, next) {
      console.log("checkLogin",req.session)
    if (!req.session.user) {
      return res.json({
        error: 'login first',
        session: false
      });
    }
    next();
  },

  checkNotLogin(req, res, next) {
      console.log("checkNotLogin",req.session)
    if (req.session.user) {
      return res.json({
        error: 'already login',
        session: true
      });
    }
    next();
  }
};
