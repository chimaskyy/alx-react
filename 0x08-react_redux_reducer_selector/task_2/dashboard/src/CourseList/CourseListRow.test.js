import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow component tests", () => {
  it("renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="First cell" />
    );
    expect(wrapper.find("th")).toHaveLength(1);
    expect(wrapper.find("th").prop("colSpan")).toBe(2);
    expect(wrapper.find("th").text()).toBe("First cell");
  });

  it("renders two cells when textSecondCell is present and isHeader is true", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="First cell"
        textSecondCell="Second cell"
      />
    );
    expect(wrapper.find("th")).toHaveLength(2);
    expect(wrapper.find("th").at(0).text()).toBe("First cell");
    expect(wrapper.find("th").at(1).text()).toBe("Second cell");
  });

  it("renders correctly two td elements within a tr element when isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="First cell"
        textSecondCell="Second cell"
      />
    );
    expect(wrapper.find("td")).toHaveLength(2);
    expect(wrapper.find("td").at(0).text()).toBe("First cell");
    expect(wrapper.find("td").at(1).text()).toBe("Second cell");
  });
});
