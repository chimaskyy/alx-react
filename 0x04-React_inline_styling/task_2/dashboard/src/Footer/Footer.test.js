import Footer from "./Footer";
import React from "react";
import { shallow } from "enzyme";

describe("Header Component Tests", () => {
  it("Renders without crashing", () => {
    const footer = shallow(<Footer />);
    expect(footer).toBeDefined();
  });
  it("renders img and h1 tags", () => {
    const footer = shallow(<Footer />);
    expect(footer.text()).toContain("Copyright");
  });
});
