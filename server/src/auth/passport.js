import { User } from '../models';

const passport = require(`passport`);
const LocalStrategy = require(`passport-local`).Strategy;

const passportJWT = require(`passport-jwt`);

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy({
  usernameField: `email`,
  passwordField: `password`,
}, ((email, password, cb) => User.fetch({ email, password })
    // TODO: check what it returns from bookshelf of not an object
    .then(user => {
      if (!user) {
        return cb(null, false, { message: `Incorrect email or password` });
      }
      return cb(null, user, { message: `Logged in successfully` });
    })
    .catch(err => cb(err)))));


passport.use(new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: `your_jwt_secret`,
  },
  ((jwtPayload, cb) =>

  // find the user in db if needed.
  // This functionality may be omitted if you store everything you'll need in JWT payload.
    User
      .where({ id: jwtPayload })
      .fetch()
      .then(user => cb(null, user))
      .catch(err => cb(err))
  ),
));
