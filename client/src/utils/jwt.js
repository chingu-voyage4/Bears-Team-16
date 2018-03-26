import jwt from "jsonwebtoken";

export const decodeToken = token =>
  jwt.decode(token);

