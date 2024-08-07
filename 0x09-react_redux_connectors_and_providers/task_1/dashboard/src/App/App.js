import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notification/Notifications";
import { getLatestNotification } from "../utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { StyleSheet, css } from "aphrodite";
import BodySection from "../BodySection/BodySection";
import AppContext from "./AppContext";
import user from "./AppContext";
import { connect } from "react-redux";
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "../actions/uiActionCreators";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: user,
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: getLatestNotification() },
      ],
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.state.logOut();
    }
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: user,
    });
  }

  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    const { user } = this.state;
    const { displayDrawer, displayNotificationDrawer, hideNotificationDrawer } =
      this.props; // Get displayDrawer and action creators from props

    return (
      <AppContext.Provider
        value={{
          user,
          logOut: this.logOut,
          logIn: this.logIn,
        }}
      >
        <div className={css(styles.body)}>
          <div className="heading-section">
            <Notifications
              listNotifications={this.state.listNotifications}
              displayDrawer={displayDrawer} // Use displayDrawer from props
              handleDisplayDrawer={displayNotificationDrawer} // Use action creator from props
              handleHideDrawer={hideNotificationDrawer} // Use action creator from props
              markNotificationAsRead={this.markNotificationAsRead}
            />
            <Header />
          </div>
          <div>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the school">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis at tempora odio, necessitatibus repudiandae
                reiciendis cum nemo sed asperiores ut molestiae eaque aliquam
                illo ipsa iste vero dolor voluptates.
              </p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    height: "100vh",
    maxWidth: "100%",
    position: "relative",
    fontFamily: "Arial, Helvetica, sans-serif",
    margin: "10px",
  },
});

const mapStateToProps = (state) => ({
  isLoggedIn: state.get("isUserLoggedIn"), 
  displayDrawer: state.get("isNotificationDrawerVisible"), 
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
