import jwt from "jsonwebtoken";

export const decodeToken = tokenName => {
  const payload = jwt.decode(window.localStorage.getItem(tokenName));

  if (!payload || payload.exp < Date.now() / 1000) {
    // Remove expired token
    window.localStorage.removeItem(tokenName);
    return false;
  }
  // Return valid token payload
  return payload;
};

