import notificationReducer from "./notificationReducer";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { fromJS, Map, List } from "immutable";

describe("notificationReducer", () => {
  it("should return the initial state", () => {
    const initialState = Map({
      notifications: List(),
      filter: "DEFAULT",
    });
    const state = notificationReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it("should handle FETCH_NOTIFICATIONS_SUCCESS", () => {
    const notifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New data available" },
    ];

    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications,
    };

    const expectedNotifications = notifications.map((notification) => ({
      ...notification,
      isRead: false,
    }));

    const expectedState = Map({
      notifications: fromJS(expectedNotifications),
      filter: "DEFAULT",
    });

    const state = notificationReducer(undefined, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it("should handle MARK_AS_READ", () => {
    const initialNotifications = [
      { id: 1, type: "default", value: "New course available", isRead: false },
      { id: 2, type: "urgent", value: "New resume available", isRead: false },
      { id: 3, type: "urgent", value: "New data available", isRead: false },
    ];

    const initialState = Map({
      notifications: fromJS(initialNotifications),
      filter: "DEFAULT",
    });

    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const expectedNotifications = initialNotifications.map((notification) =>
      notification.id === action.index
        ? { ...notification, isRead: true }
        : notification
    );

    const expectedState = Map({
      notifications: fromJS(expectedNotifications),
      filter: "DEFAULT",
    });

    const state = notificationReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });

  it("should handle SET_TYPE_FILTER", () => {
    const initialNotifications = [
      { id: 1, type: "default", value: "New course available", isRead: false },
      { id: 2, type: "urgent", value: "New resume available", isRead: false },
      { id: 3, type: "urgent", value: "New data available", isRead: false },
    ];

    const initialState = Map({
      notifications: fromJS(initialNotifications),
      filter: "DEFAULT",
    });

    const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT",
    };

    const expectedState = Map({
      notifications: fromJS(initialNotifications),
      filter: "URGENT",
    });

    const state = notificationReducer(initialState, action);
    expect(state.toJS()).toEqual(expectedState.toJS());
  });
});
