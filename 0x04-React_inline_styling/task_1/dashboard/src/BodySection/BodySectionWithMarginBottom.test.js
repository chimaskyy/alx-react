import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";
import { StyleSheetTestUtils } from "aphrodite";

import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Testing BodySection Component", () => {
  it("checking that shallowing the component should render correctly the children and one h2 element", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    const h = wrapper.find("h2").text();
    const p = wrapper.find("p").text();
    expect(h).toEqual("test title");
    expect(p).toEqual("test children node");
    expect(wrapper.containsAllMatchingElements([h, p])).toEqual(true);
  });

  it("should apply margin bottom to child component", () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);

    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).html()).toEqual(
      '<div class="bodySection"><h2>test title</h2></div>'
    );
  });

});
