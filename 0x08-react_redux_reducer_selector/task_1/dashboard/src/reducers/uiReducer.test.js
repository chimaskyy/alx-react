import { Map } from 'immutable'
import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";
import { SELECT_COURSE } from "../actions/courseActionTypes";

describe("uiReducer", () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  });

  it("should return the initial state when no action is passed", () => {
    const state = uiReducer(undefined, {}).toJS();
    expect(state).toEqual(initialState.toJS());
  });

  it("should handle DISPLAY_NOTIFICATION_DRAWER", () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = initialState
      .set("isNotificationDrawerVisible", true)
      .toJS();
    const state = uiReducer(initialState, action).toJS();
    expect(state).toEqual(expectedState);
  });

  it("should handle HIDE_NOTIFICATION_DRAWER", () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const initialStateWithDrawer = initialState.set(
      "isNotificationDrawerVisible",
      true
    );
    const expectedState = initialState
      .set("isNotificationDrawerVisible", false)
      .toJS();
    const state = uiReducer(initialStateWithDrawer, action).toJS();
    expect(state).toEqual(expectedState);
  });

  it("should handle LOGIN_SUCCESS", () => {
    const action = { type: LOGIN_SUCCESS };
    const expectedState = initialState.set("isUserLoggedIn", true).toJS();
    const state = uiReducer(initialState, action).toJS();
    expect(state).toEqual(expectedState);
  });

  it("should handle LOGIN_FAILURE", () => {
    const action = { type: LOGIN_FAILURE };
    const expectedState = initialState.set("isUserLoggedIn", false).toJS();
    const state = uiReducer(initialState, action).toJS();
    expect(state).toEqual(expectedState);
  });

  it("should handle LOGOUT", () => {
    const action = { type: LOGOUT };
    const initialStateLoggedIn = initialState.set("isUserLoggedIn", true);
    const expectedState = initialState.set("isUserLoggedIn", false).toJS();
    const state = uiReducer(initialStateLoggedIn, action).toJS();
    expect(state).toEqual(expectedState);
  });

  it("should return the initial state when SELECT_COURSE action is passed", () => {
    const action = { type: SELECT_COURSE };
    const state = uiReducer(initialState, action).toJS();
    expect(state).toEqual(initialState.toJS());
  });
});

