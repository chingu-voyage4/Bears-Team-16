import { verifyToken } from "./jwt";
import { User } from "../models";

export const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;
  // Check if there is a token in the request
  if (!token) {
    console.log(`No token found`);
    // TODO handle response
  } else {
    // If there is a token, check if payload metches a user in the db
    const payload = verifyToken(token);
    return User
      .where({ email: payload.email, id: payload.id })
      .fetch({ columns: [ `id`, `email` ] })
      .then(user => next())
      .catch(console.log);
  }
};

