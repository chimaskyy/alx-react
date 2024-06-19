import React from "react";

export const user = {
  email: "",
  password: "",
  isLoggedIn: false,
};

export const logOut = () => {};

const AppContext = React.createContext({
  user,
  logOut,
  logIn: () => {},
});

export default AppContext;
