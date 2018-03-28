import passport from "passport";
import bcrypt from "bcrypt";
import { encodeToken } from "../utils/jwt";
import { User } from "../models";

module.exports = app => {
  app.post(`/login`, (req, res, next) => {
    passport.authenticate(`local`, { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.json({
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
          token: encodeToken(user),
        });
      });
    })(req, res);
  });

  app.post(`/register`, (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 12);
    return User
      .forge()
      .save({ ...req.body, password: hashedPassword })
      .then(u => u.fetch())
      .then(u => {
        const user = u.toJSON();
        delete user.password;
        res.json({
          token: encodeToken(user),
        });
      })
      .catch(console.log);
  });
};
