import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
// import passportJWT, { Strategy as JWTStrategy } from "passport-jwt";
import { User } from "../models";
// import keys from "../config/keys";

// const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy({
  usernameField: `email`,
  passwordField: `password`,
}, ((email, password, cb) =>
    // TODO: check what it returns from bookshelf of not an object
    User.where({ email, password }).fetch()
      .then(user => {
        if (!user) {
          return cb(null, false, { message: `Incorrect email or password` });
        }
        return cb(null, user.toJSON(), { message: `Logged in successfully` });
      })
      .catch(err => cb(err))
  )));


// passport.use(new JWTStrategy(
//   {
//     jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//     secretOrKey: keys.JWT_SECRET,
//   },
//   ((jwtPayload, cb) =>

//   // find the user in db if needed.
//   // This functionality may be omitted if you store everything you'll need in JWT payload.
//   {
//     console.log(`I'M HEREEEE`);
//     console.log(ExtractJWT.fromAuthHeaderAsBearerToken());
//     cb();
//   }
//   // User
//   //   .where({ id: jwtPayload })
//   //   .fetch()
//   //   .then(user => cb(null, user))
//   //   .catch(err => cb(err))
//   ),
// ));
