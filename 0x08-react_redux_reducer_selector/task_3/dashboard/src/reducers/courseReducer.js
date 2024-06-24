import { fromJS } from "immutable";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

const initialState = fromJS([]);

function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return fromJS(
        action.data.map((course) => ({ ...course, isSelected: false }))
      );
    case SELECT_COURSE:
      return state.map((course) =>
        course.get("id") === action.index
          ? course.set("isSelected", true)
          : course
      );
    case UNSELECT_COURSE:
      return state.map((course) =>
        course.get("id") === action.index
          ? course.set("isSelected", false)
          : course
      );
    default:
      return state;
  }
}

export default courseReducer;
