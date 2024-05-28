// import logo from "./holberton_logo.jpg";
import Notifications from "../Notification/Notifications.js";
import React from "react";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import Login from "../Login/Login.js";

// import { getFullYear, getFooterCopy } from "./utils.js";
function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
