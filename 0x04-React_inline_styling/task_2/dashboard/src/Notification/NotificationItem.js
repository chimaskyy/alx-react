import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

// (pure)ensures that the component will only re-render when new notifications are added.
class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { markAsRead, id } = this.props;
    markAsRead(id);
  }

  render() {
    const { type, html, value } = this.props;
    return (
      <>
        {type && value ? (
          <li
            className={
              type === "default" ? css(styles.default) : css(styles.urgent)
            }
            data-notification-type={type}
            onClick={this.handleClick}
          >
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            data-notification-type={type}
            onClick={this.handleClick}
            className={css(styles.urgent)}
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        ) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  value: PropTypes.string,
  id: PropTypes.number.isRequired,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
};

export default NotificationItem;
