import jwt from "jsonwebtoken";
import passport from "passport";
import keys from "../config/keys";
import { verifyEmail } from "../utils/auth";
import { encodeToken } from "../utils/jwt";
import { User } from "../models";

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
        return res.json({
          user,
          token: encodeToken(user),
        });
      });
    })(req, res);
  });

  app.post(`/register`, async (req, res) =>
    // TODO hash password
    User
      .forge()
      .save(req.body)
      .then(u => u.fetch())
      .then(u => {
        const user = u.toJSON();
        res.json({
          user,
          token: encodeToken(user),
        });
      })
      .catch(console.log));

  // We're not using this at all
  // app.use(`/user`, passport.authenticate(`jwt`, { session: false }), (req, res, next) => {
  //   res.send(req.user);
  // });
};
