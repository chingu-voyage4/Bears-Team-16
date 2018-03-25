import jwt from "jsonwebtoken";

export const decodeToken = token => {
  const decoded = jwt.decode(token);
  console.log(decoded);
  return decoded;
};

