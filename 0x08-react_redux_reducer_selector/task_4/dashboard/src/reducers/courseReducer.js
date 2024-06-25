import { Map } from "immutable";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";
import courseNormalizer from "../schema/courses";

const initialState = Map({
  courses: Map()
});

function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Normalize the data
      const normalizedData = courseNormalizer(action.data);

      // Convert normalized data to Immutable Map and merge it with the state
      return state.set("courses", Map(normalizedData));

    case SELECT_COURSE:
      return state.setIn(["courses", action.index, "isSelected"], true);

    case UNSELECT_COURSE:
      return state.setIn(["courses", action.index, "isSelected"], false);
    default:
      return state;
  }
}

export default courseReducer;
