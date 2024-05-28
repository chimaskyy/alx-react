import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import "./CourseList.css";
import CourseShape from "./CourseShape";
function CourseList({ listCourse }) {
  return (
    <>
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow
            textFirstCell="Course name"
            textSecondCell="Credit"
            isHeader={true}
          />
        </thead>
        <tbody>
          {listCourse.length > 0 ? (
            listCourse.map(({ id, name, credit }) => (
              <CourseListRow
                key={id}
                textFirstCell={name}
                textSecondCell={credit}
              />
            ))
          ) : (
            <CourseListRow textFirstCell="No course available yet" />
          )}
        </tbody>
      </table>
    </>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
