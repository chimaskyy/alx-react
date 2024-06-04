import React from 'react'
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <div className={css(styles.AppBody)}>
      <p>Login to access the full dashboard</p>
      <form>
        <label>email:</label>
        <input type="email" id="email" name="email" />
        <br></br>
        <label>password:</label>
        <input type="password" id="password" name="password" />
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
  }
})

export default Login