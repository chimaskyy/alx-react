/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils";
import AppContext from "../App/AppContext";

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </div>
  );
}

export default Footer;
