import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";

function Login({ logIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    logIn(email, password);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    setEnableSubmit(email !== "" && password !== "");
  }, [email, password]);

  return (
    <div className={css(styles.AppBody)}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          className={css(styles.input)}
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <label htmlFor="password">Password:</label>
        <input
          className={css(styles.input)}
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />
        <input type="submit" value="Ok" disabled={!enableSubmit} />
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  AppBody: {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  input: {
    margin: "10px",
  },
});

export default Login;
