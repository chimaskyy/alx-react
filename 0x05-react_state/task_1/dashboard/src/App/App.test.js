// src/App.test.js
import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import Notifications from "../Notification/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
describe("App Component Tests", () => {
  it("Renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
 it("should render Header component", () => {
   const component = shallow(<App />);

   expect(component.contains(<Header />)).toBe(true);
 });
   it("should render Login Component", () => {
     const component = shallow(<App />);

     expect(component.contains(<Login />)).toBe(true);
   });
  it("should render Footer Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });
  it("should contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it("CourseList is not displayed by default", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  describe("when isLoggedIn is true", () => {
    it("does not include the Login component", () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(Login)).toHaveLength(0);
    });

    it("includes the CourseList component", () => {
      const wrapper = shallow(<App isLoggedIn={true} />);
      expect(wrapper.find(CourseList)).toHaveLength(1);
    });
  });

  // Test case: Verify logOut function and alert on key press
  it("calls logOut and shows alert when ctrl+h is pressed", () => {
    const logOutMock = jest.fn();
    window.alert = jest.fn();

    render(<App logOut={logOutMock} />);

    fireEvent.keyDown(document, { key: "h", ctrlKey: true });

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logOutMock).toHaveBeenCalled();
  });
  it("Has default state for displayDrawer false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("displayDrawer changes to true when calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    const instance = wrapper.instance();

    instance.handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it("displayDrawer changes to false when calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    // const instance = wrapper.instance();

    wrapper.instance().handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toEqual(true);

    wrapper.instance().handleHideDrawer();

    expect(wrapper.state().displayDrawer).toEqual(false);
  });

   it("passes displayDrawer, handleDisplayDrawer, and handleHideDrawer props to Notifications", () => {
     const wrapper = shallow(<App />);
     const notifications = wrapper.find(Notifications);

     expect(notifications.prop("displayDrawer")).toEqual(
       wrapper.state().displayDrawer
     );
     expect(notifications.prop("handleDisplayDrawer")).toEqual(
       wrapper.instance().handleDisplayDrawer
     );
     expect(notifications.prop("handleHideDrawer")).toEqual(
       wrapper.instance().handleHideDrawer
     );
   });
  
});
