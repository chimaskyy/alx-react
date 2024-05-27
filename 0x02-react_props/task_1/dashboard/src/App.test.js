// src/App.test.js
import React from "react";
import { shallow } from "enzyme";
import App from "./App/App";
import Notifications from "./Notifications";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";

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
});
