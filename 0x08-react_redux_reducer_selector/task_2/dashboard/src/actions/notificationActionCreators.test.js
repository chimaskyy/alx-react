import { markAsAread, setNotificationFilter } from "./notificationActionCreators";
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "./notificationActionTypes";


describe("tests for action creators", () => {
  it("should return right action payload and type when selectCourse is called", () => {
    expect(markAsAread(1)).toEqual({
      type: MARK_AS_READ,
      index: 1
    });
  });
  it("should return right action payload and type when unSelectCourse is called", () => {
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    });
  });
});
