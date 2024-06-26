import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes";
// import { dispatch } from "redux"; // Add this line to import the dispatch function
export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index,
  };
}
export const boundSelectCourse = (index) => dispatch(selectCourse(index));

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
}

export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));

export const fetchCourseSuccess = (data) => {
  return {
    type: FETCH_COURSE_SUCCESS,
    data,
  };
};