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
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it("should return the initial state when no action is passed", () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("should handle DISPLAY_NOTIFICATION_DRAWER", () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should handle HIDE_NOTIFICATION_DRAWER", () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const initialStateWithDrawer = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: false,
    };
    const state = uiReducer(initialStateWithDrawer, action);
    expect(state).toEqual(expectedState);
  });

  it("should handle LOGIN_SUCCESS", () => {
    const action = { type: LOGIN_SUCCESS };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: true,
    };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should handle LOGIN_FAILURE", () => {
    const action = { type: LOGIN_FAILURE };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false,
    };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it("should return the initial state when SELECT_COURSE action is passed", () => {
    const action = { type: SELECT_COURSE };
    const state = uiReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it("should handle LOGOUT", () => {
    const action = { type: LOGOUT };
    const initialStateLoggedIn = {
      ...initialState,
      isUserLoggedIn: true,
    };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false,
    };
    const state = uiReducer(initialStateLoggedIn, action);
    expect(state).toEqual(expectedState);
  });
});
