const jwt = require(`jsonwebtoken`);
const passport = require(`passport`);

module.exports = (app) => {
  app.post(`/login`, (req, res, next) => {
    passport.authenticate(`local`, { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: `Something is not right`,
          user,
        });
      }
      req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err);
        }
        // generate a signed son web token with the
        // contents of user object and return it in the response
        const token = jwt.sign(user, `your_jwt_secret`);
        return res.json({ user, token });
      });
    })(req, res);
  });

  /* GET user profile. */
  app.get(`/profile`, (req, res, next) => {
    res.send(req.user);
  });
  app.use(`/user`, passport.authenticate(`jwt`, { session: false }), app.get(`/profile`));
};
