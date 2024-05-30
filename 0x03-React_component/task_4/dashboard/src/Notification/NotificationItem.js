import React from "react";
import PropTypes from "prop-types";
import "./Notification.css";

class NotificationItem extends React.Component {
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
        {value ? (
          <li data-notification-type={type} onClick={this.handleClick}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            data-notification-type={type}
            onClick={this.handleClick}
            dangerouslySetInnerHTML={{__html: html}}
          ></li>
        ) : null}
      </>
    );
  }
}

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
