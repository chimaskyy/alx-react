import { Map } from "immutable";
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";

// Mock state
const state = {
  notifications: Map({
    filter: "DEFAULT",
    notifications: Map({
      1: Map({
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      }),
      2: Map({
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: true,
      }),
      3: Map({
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false,
      }),
    }),
  }),
};

describe("Notification Selectors", () => {
  it("should return the filter type", () => {
    const filter = filterTypeSelected(state);
    expect(filter).toEqual("DEFAULT");
  });

  it("should return the list of notifications", () => {
    const notifications = getNotifications(state);
    expect(notifications.toJS()).toEqual({
      1: {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      },
      2: { id: 2, type: "urgent", value: "New resume available", isRead: true },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false },
    });
  });

  it("should return the list of unread notifications", () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications.toJS()).toEqual({
      1: {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false },
    });
  });
});
