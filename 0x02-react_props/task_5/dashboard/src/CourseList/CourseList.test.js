import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList component tests", () => {
  it("renders CourseList component without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toBeDefined();
  });

  it("renders 5 rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });
});
