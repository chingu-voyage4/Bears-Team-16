import jwt from "jsonwebtoken";
import passport from "passport";
import keys from "../config/keys";
import { verifyEmail } from "../utils/auth";

module.exports = app => {
  // Verify if email exists
  app.post(`/email`, async (req, res) => {
    const email = await verifyEmail(req.body.email);
    // TODO handle correctly per client requirements
    res.json({
      message: email ?
        `User found. Login.` :
        `User not found. Register.`,
    });
  });

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
        // generate a signed jwt with the
        // contents of user object and return it in the response
        const token = jwt.sign(user, keys.JWT_SECRET);
        return res.json({ user, token });
      });
    })(req, res);
  });

  app.use(`/user`, passport.authenticate(`jwt`, { session: false }), (req, res, next) => {
    res.send(req.user);
  });
};
