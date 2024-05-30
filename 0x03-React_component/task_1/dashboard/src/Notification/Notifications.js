// src/Notification/Notifications.js

import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import closeIcon from "../close-icon.png";
import "./Notification.css";

export default function Notifications({
  displayDrawer = false,
  listNotifications,
}) {
  function handleClick() {
    console.log("Close button has been clicked");
  }

  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
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
            onClick={handleClick}
          >
            <img src={closeIcon} alt="closeIcon" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.length === 0 ? (
              <NotificationItem
                type="default"
                value="No new notification for now"
              />
            ) : (
              listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
