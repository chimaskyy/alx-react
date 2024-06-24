import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from "../actions/notificationActionTypes";
import { fromJS, Map, List } from "immutable";

const initialState = Map({
  notifications: List(),
  filter: "DEFAULT",
});

function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const notificationsWithIsRead = action.data.map((notification) => ({
        ...notification,
        isRead: false,
      }));
      return state.set("notifications", fromJS(notificationsWithIsRead));

    case MARK_AS_READ:
      return state.update("notifications", (notifications) =>
        notifications.map((notification) =>
          notification.get("id") === action.index
            ? notification.set("isRead", true)
            : notification
        )
      );
    case SET_TYPE_FILTER:
        return state.set('filter', action.filter)  
    default:
      return state;
  }
}

export default notificationReducer;
