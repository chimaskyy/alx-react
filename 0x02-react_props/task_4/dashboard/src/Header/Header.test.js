import Header from "./Header";
import React from "react";
import { shallow } from "enzyme";

describe("Header Component Tests", () => {
  it("Renders without crashing", () => {
    const header = shallow(<Header />);
    expect(header).toBeDefined();
  });
  it("renders img and h1 tags", () => {
    const header = shallow(<Header />);
    expect(header.find("img").length).toBe(1);
    expect(header.find("h1").length).toBe(1);
  });
});
