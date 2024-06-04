import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import closeIcon from "../close-icon.png";
import { StyleSheet, css } from "aphrodite";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  // ensures that the component will only re-render when new notifications are added.
  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {displayDrawer && (
          <div className={css(styles.notification)}>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "20px",
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

const styles = StyleSheet.create({
  notification: {
    padding: "1em",
    marginBottom: "20px",
    border: "2px dashed red",
    position: "absolute",
    top: "2.5em",
    right: 0,
    "@media (max-width: 375px)": {
      display: "block",
      height: "100vh",
      width: "100vw",
      marginLeft: "auto",
      marginRight: "auto",
      border: "none",
      fontSize: "20px",
      padding: "0",
    },
  },

  "notification-header": {
    display: "flex",
    justifyContent: "space-between",
  },
  menuItem: {
    textAlign: "right",
  },
  // '[data-notification-type="default"]': {
  //   color: "blue",
  // },

  // "[data-urgent]": {
  //   color: "red",
  // },

  // '[data-notification-type="urgent"]': {
  //   color: "red",
  // },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

export default Notifications;
