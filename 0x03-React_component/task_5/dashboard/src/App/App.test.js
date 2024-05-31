// src/App.test.js
import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Notifications from "../Notification/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

describe("App Component Tests", () => {
  it("Renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
  it("renders a div with the class App-header", () => {
    const app = shallow(<App />);

    expect(app.find(".App-header")).toBeDefined();
  });
  it("renders a div with the class App-body", () => {
    const app = shallow(<App />);

    expect(app.find(".App-body")).toBeDefined();
  });
  it("renders a div with the class App-footer", () => {
    const app = shallow(<App />);

    expect(app.find(".App-footer")).toBeDefined();
  });
  it("should contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it("should contain the Header component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it("should contain the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("should contain the Footer component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
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
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    const wrapper = mount(<App logOut={logOutMock} />);

    const event = new KeyboardEvent("keydown", { key: "h", ctrlKey: true });
    document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith("Logging you out");
    expect(logOutMock).toHaveBeenCalled();

    alertMock.mockRestore();
    wrapper.unmount();
  });
  
});
