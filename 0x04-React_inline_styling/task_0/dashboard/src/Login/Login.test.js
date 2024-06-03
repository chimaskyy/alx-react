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
});