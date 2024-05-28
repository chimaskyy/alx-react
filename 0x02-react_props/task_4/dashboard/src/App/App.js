// import logo from "./holberton_logo.jpg";
import Notifications from "../Notification/Notifications.js";
import React from "react";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList.js";
 

// import { getFullYear, getFooterCopy } from "./utils.js";
function App(isLoggedIn) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};


export default App;
