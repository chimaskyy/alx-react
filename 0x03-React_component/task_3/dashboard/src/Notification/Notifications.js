import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import closeIcon from "../close-icon.png";
import "./Notification.css";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

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
              onClick={() => console.log("Close button has been clicked")}
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
                    markAsRead={this.markAsRead}
                    id={notification.id}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
