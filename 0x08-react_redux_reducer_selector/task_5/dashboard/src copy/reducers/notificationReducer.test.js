import { fromJS, Map } from "immutable";
import notificationReducer from "./notificationReducer";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_TYPE_FILTER,
  MARK_AS_READ,
} from "../actions/notificationActionTypes";

describe("notificationReducer", () => {
  it("should return the initial state", () => {
    const initialState = Map({
      notifications: Map(),
      filter: "DEFAULT",
    });
    const state = notificationReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it("should handle FETCH_NOTIFICATIONS_SUCCESS", () => {
    const data = [
      {
        id: 1,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available",
      },
    ];
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data };
    const expectedState = fromJS({
      notifications: {
        1: {
          id: 1,
          type: "default",
          value: "New course available",
          isRead: false,
        },
        2: {
          id: 2,
          type: "urgent",
          value: "New resume available",
          isRead: false,
        },
        3: {
          id: 3,
          type: "urgent",
          value: "New data available",
          isRead: false,
        },
      },
      filter: "DEFAULT",
    });
    const state = notificationReducer(undefined, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it("should handle SET_TYPE_FILTER", () => {
    const filter = "URGENT";
    const action = { type: SET_TYPE_FILTER, filter };
    const expectedState = Map({
      notifications: Map(),
      filter: "URGENT",
    });
    const state = notificationReducer(undefined, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it("should handle MARK_AS_READ", () => {
    const initialState = fromJS({
      notifications: {
        1: {
          id: 1,
          type: "default",
          value: "New course available",
          isRead: false,
        },
        2: {
          id: 2,
          type: "urgent",
          value: "New resume available",
          isRead: false,
        },
        3: {
          id: 3,
          type: "urgent",
          value: "New data available",
          isRead: false,
        },
      },
      filter: "DEFAULT",
    });
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = initialState.setIn(
      ["notifications", "2", "isRead"],
      true
    );
    const state = notificationReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });
});
