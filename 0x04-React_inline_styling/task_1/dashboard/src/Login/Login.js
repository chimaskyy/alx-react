import React from 'react'
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <div className={css(styles.AppBody)}>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">Email:</label>
        <input className={css(styles.input)} type="email" name="email"></input>
        <br></br>
        <label htmlFor="password">Password:</label>
        <input
          className={css(styles.input)}
          type="password"
          name="password"
        ></input>
        <br></br>
        <button>OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  AppBody: {
  fontSize: '1rem',
  padding: '2em',
  borderBottom: '3px solid #e0354b',
  height: '45%'
  },
  input: {
    margin: "10px",
  },
})

export default Login