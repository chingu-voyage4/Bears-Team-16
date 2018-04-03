import jwt from "jsonwebtoken";
import keys from "../config/keys";

/**
 * @param {} payload - Data to encode
 * @return {string} encoded token
 */
export const encodeToken = payload =>
  jwt.sign(payload, keys.JWT_SECRET, {
    expiresIn: `7d`,
  });

/**
 * @param {string} encoded token
 * @return {object} verified token payload or an error
 */
export const decodeToken = token => {
  // TODO refactor
  try {
    const decoded = jwt.decode(token);
    return decoded;
  } catch (err) {
    throw new Error(`Token invalid`);
  }
};

/**
 * @param {string} encoded token
 * @return {object} token payload or an error
 */
export const verifyToken = token => {
  // TODO reafactor
  try {
    const verified = jwt.verify(token, keys.JWT_SECRET);
    return verified;
  } catch (err) {
    return new Error(`Token invalid`);
  }
};
