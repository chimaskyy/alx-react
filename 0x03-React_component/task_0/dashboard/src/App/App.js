import React from "react";
import Notifications from "../Notification/Notifications";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <Notifications
          displayDrawer={true}
          listNotifications={listNotifications}
        />
        <div className="App">
          <Header />
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <Footer />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
