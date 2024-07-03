import courseReducer from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { fromJS } from "immutable";

const courses = [
  { id: 1, name: "ES6", credit: 60, isSelected: true },
  { id: 2, name: "Webpack", credit: 20, isSelected: true },
  { id: 3, name: "React", credit: 40, isSelected: true },
];
describe("courseReducer", () => {
  it("should return the initial state", () => {
    const initialState = fromJS([]);
    const state = courseReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("should handle FETCH_COURSE_SUCCESS", () => {

    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: courses,
    };

    const expectedState = fromJS(
      courses.map((course) => ({ ...course, isSelected: false }))
    );
    const state = courseReducer(fromJS([]), action);
    expect(state).toEqual(expectedState);
  });

 it("should handle SELECT_COURSE", () => {
   const initialState = fromJS([
     { id: 1, name: "ES6", isSelected: false, credit: 60 },
     { id: 2, name: "Webpack", isSelected: false, credit: 20 },
     { id: 3, name: "React", isSelected: false, credit: 40 },
   ]);

   const action = {
     type: SELECT_COURSE,
     index: 2,
   };

   const expectedState = fromJS([
     { id: 1, name: "ES6", isSelected: false, credit: 60 },
     { id: 2, name: "Webpack", isSelected: true, credit: 20 },
     { id: 3, name: "React", isSelected: false, credit: 40 },
   ]);

   const state = courseReducer(initialState, action);
   expect(state.toJS()).toEqual(expectedState.toJS());
 });

 it("should handle UNSELECT_COURSE", () => {
   const initialState = fromJS([
     { id: 1, name: "ES6", isSelected: true, credit: 60 },
     { id: 2, name: "Webpack", isSelected: true, credit: 20 },
     { id: 3, name: "React", isSelected: true, credit: 40 },
   ]);

   const action = {
     type: UNSELECT_COURSE,
     index: 1,
   };

   const expectedState = fromJS([
     { id: 1, name: "ES6", isSelected: false, credit: 60 },
     { id: 2, name: "Webpack", isSelected: true, credit: 20 },
     { id: 3, name: "React", isSelected: true, credit: 40 },
   ]);

   const state = courseReducer(initialState, action);
   expect(state.toJS()).toEqual(expectedState.toJS());
 });


});
