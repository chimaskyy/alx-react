import { createSelector } from "reselect";

const stateNotificatio = (state) => state.notification;

export const filterType = createSelector([stateNotificatio], (notification) => {
  return notification.get("filter");
});

export const getReadNotification = createSelector(
  [stateNotificatio],
  (notification) => {
    return notification.get("notificatio");
  }
);

export const getUnReadNotification = createSelector(
  [stateNotificatio],
  (notification) => {
    return notification.fiter((notificatio) => !notificatio.get("isRead"));
  }
);
