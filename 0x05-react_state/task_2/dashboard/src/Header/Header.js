import React, { useContext } from "react";
import logo from "./holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <div className={css(styles.head)}>
      <img src={logo} className={css(styles.img)} alt="logo" />
      <h1>School dashboard</h1>
      <br></br>
      {user.isLoggedIn && (
        <div id="logoutSection" className={css(styles.logoutSection)}>
          Welcome {user.email} (
          <a href="#" onClick={logOut}>
            logout
          </a>
          )
        </div>
      )}
    </div>
  );
}

const styles = StyleSheet.create({
  head: {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },
  img: {
    width: "200px",
    height: "200px",
  },
});

export default Header;
