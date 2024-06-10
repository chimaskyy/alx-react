import Login from "./Login";
import React from "react";
import { shallow } from "enzyme";


describe("Header Component Tests", () => {
  it("Renders without crashing", () => {
    const login = shallow(<Login />);
    expect(login).toBeDefined();
  });
  it("renders img and h1 tags", () => {
    const login = shallow(<Login />);
    expect(login.find("input").length).toBe(2);
    expect(login.find("label").length).toBe(2);
  });

  it("Submit button is disabled by default", () => {
    const login = shallow(<Login />);
    const submitButton = login.find("input[type='submit']");
    expect(submitButton.prop("disabled")).toBe(true);
  });

  it("Enables submit button after changing input values", () => {
    const login = shallow(<Login />);
    login
      .find("#email")
      .simulate("change", { target: { value: "test@example.com" } });
    login
      .find("#password")
      .simulate("change", { target: { value: "password123" } });
    const submitButton = login.find("input[type='submit']");
    expect(submitButton.prop("disabled")).toBe(false);
  });
});