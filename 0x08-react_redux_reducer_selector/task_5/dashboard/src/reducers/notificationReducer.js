import { Map } from "immutable";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_TYPE_FILTER,
  MARK_AS_READ,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

const initialState = Map({
  notifications: Map(),
  filter: "DEFAULT",
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    // sends the list of notifications in a data attribute when action is called
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = notificationsNormalizer(action.data);
      const notificationsArray = Object.values(normalizedData.notifications);
      const notificationsWithIsRead = notificationsArray.map(
        (notification) => ({ ...notification, isRead: false })
      );
      const notificationsMap = new Map(
        notificationsWithIsRead.map((notification) => [
          notification.id,
          notification,
        ])
      );
      return state.set("notifications", notificationsMap);
    }

    case SET_TYPE_FILTER:
      // sends a filter attribute with either DEFAULT or URGENT
      return state.set("filter", action.filter);

    case MARK_AS_READ:
      // sends an index corresponding to the id of the notification to update
      // set 'isRead' to false
      return state.setIn(
        ["notifications", action.index.toString(), "isRead"],
        true
      );

    default:
      return state;
  }
};

export default notificationReducer;
