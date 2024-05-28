import React from "react";
import "./Notification.css";
import NotificationItem from "./NotificationItem";
import closeIcon from "../close-icon.png";
import { getLatestNotification } from "../utils";

export default function Notifications() {
  function handleclick() {
    console.log("Close button has been clicked");
  }

  return (
    <div className="Notification">
      <button
        style={{
          color: "#3a3a3a",
          fontWeight: "bold",
          background: "none",
          border: "none",
          fontSize: "15px",
          position: "absolute",
          right: "2px",
          top: "2px",
          cursor: "pointer",
        }}
        aria-label="Close"
        onClick={handleclick}
      >
        <img src={closeIcon} alt="closeIcon"></img>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={getLatestNotification()} />
      </ul>
    </div>
  );
}
