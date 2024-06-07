// import React, { useEffect, useState } from "react";
// import { StyleSheet, css } from "aphrodite";

// function Login() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [enableSubmit, setEnableSubmit] = useState(false);

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     setIsLoggedIn(true);
//   };

//   const handleChangeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleChangePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   useEffect(() => {
//     if (email !== "" && password !== "") {
//       setEnableSubmit(true);
//     } else {
//       if (enableSubmit !== false) {
//         setEnableSubmit(false);
//       }
//     }
//   }, [email, password]);

//   return (
//     <React.Fragment>
//       <div className={css(styles.body)}>
//         <p>Login to access the full dashboard</p>
//         <form onSubmit={handleLoginSubmit}>
//           <label htmlFor="email">Email:</label>
//           <input
//             className={css(styles.input)}
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={handleChangeEmail}
//           />
//           <br></br>
//           <label htmlFor="password">Password:</label>
//           <input
//             className={css(styles.input)}
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={handleChangePassword}
//           />
//           <br></br>
//           <input type="submit" value="Ok" disabled={!enableSubmit} />
//         </form>
//       </div>
//     </React.Fragment>
//   );
// }

// const styles = StyleSheet.create({
//   body: {
//     fontSize: "1rem",
//     padding: "2em",
//     height: "45%",
//     "@media (max-width: 900px)": {
//       display: "flex",
//       flexDirection: "column",
//     },
//   },

//   input: {
//     margin: "10px",
//   },
// });

// export default Login;

import React from "react";
import { StyleSheet, css } from "aphrodite";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
    // Bind event handlers
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Update state to indicate the user is logged in
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    // Update the email state with the value from the input field
    this.setState({ email: event.target.value }, this.validateSubmit);
  }

  handleChangePassword(event) {
    // Update the password state with the value from the input field
    this.setState({ password: event.target.value }, this.validateSubmit);
  }

  validateSubmit() {
    // Check if both email and password fields are not empty
    const { email, password } = this.state;
    const enableSubmit = email.trim() !== "" && password.trim() !== "";
    // Update the enableSubmit state based on the validation result
    this.setState({ enableSubmit });
  }

  render() {
    return (
      <div className={css(styles.AppBody)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            type="email"
            name="email"
            value={this.state.email} // Set value from state
            onChange={this.handleChangeEmail} // Call handleChangeEmail on change
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            name="password"
            value={this.state.password} // Set value from state
            onChange={this.handleChangePassword} // Call handleChangePassword on change
          />
          <br />
          <input type="submit" value="Ok" disabled={!this.state.enableSubmit}>
          </input>
        </form>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  AppBody: {
    fontSize: "1rem",
    padding: "2em",
    borderBottom: "3px solid #e0354b",
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
