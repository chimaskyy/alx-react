import React from "react";
import logo from "./holberton_logo.jpg";
// import "./Header.css";
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <div className={css(styles.head)}>
      <img src={logo} className={css(styles.img)} alt="logo" />
      <h1>School dashboard</h1>
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
    width: '200px',
    height: '200px',
  },
});

export default Header;
