import passport from "passport";
import bcrypt from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../models";

passport.use(new LocalStrategy({
  usernameField: `email`,
  passwordField: `password`,
}, ((email, password, cb) =>
    // TODO: check what it returns from bookshelf of not an object
    User.where({ email }).fetch()
      .then(async model => {
        const user = model && model.toJSON();
        // Check untered password with the stored hash
        if (!user || !(await bcrypt.compareSync(password, user.password))) {
          return cb(null, false, {
            message: `Email or password incorrect.`,
          });
        }
        delete user.password;
        return cb(null, user, { message: `Logged in successfully` });
      })
      .catch(err => cb(err))
  )));
