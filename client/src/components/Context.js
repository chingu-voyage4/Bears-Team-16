import React from "react";

export const UserContext = React.createContext({
  user: false,
  logout: () => {},
  login: () => {},
});

