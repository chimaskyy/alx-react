import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom/extend-expect";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);
    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications displayDrawer={true} />);
    expect(notification.find("ul")).toBeDefined();
  });

  it("renders notification items", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      {
        id: 3,
        type: "urgent",
        html: { __html: "<strong>Urgent requirement</strong>" },
      },
    ];
    const notification = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(notification.find(NotificationItem)).toHaveLength(3);
  });

  it("renders correct text", () => {
    const notification = shallow(<Notifications displayDrawer={true} />);
    expect(notification.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });

  it("displays menu item when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".menuItem")).toHaveLength(0); 
  });


  // it("displays menu item when displayDrawer is true", () => {
  //   const wrapper = shallow(<Notifications displayDrawer={true} />);
  //   expect(wrapper.find(".menuItem")).toHaveLength(1);
  // });

  it("renders NotificationItem elements correctly when listNotifications is passed", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      {
        id: 3,
        type: "urgent",
        html: { __html: "<strong>Urgent requirement</strong>" },
      },
    ];
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders "No new notification for now" when listNotifications is empty', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(1);
    expect(wrapper.find(NotificationItem).prop("value")).toEqual(
      "No new notification for now"
    );
  });
  describe("onclick event behaves as it should", () => {
    it("should call console.log", () => {
      const wrapper = shallow(<Notifications />);
      const spy = jest.spyOn(console, "log").mockImplementation();

      wrapper.instance().markAsRead = spy;
      wrapper.instance().markAsRead(1);
      expect(wrapper.instance().markAsRead).toBeCalledWith(1);
      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith(1);
      spy.mockRestore();
    });
  });

  // it("calls markAsRead when a notification is clicked", () => {
  //   const listNotifications = [
  //     { id: 1, type: "default", value: "New course available" },
  //     { id: 2, type: "urgent", value: "New resume available" },
  //     {
  //       id: 3,
  //       type: "urgent",
  //       html: { __html: "<strong>Urgent requirement</strong>" },
  //     },
  //   ];

  //   const mockMarkAsRead = jest.fn();

  //   render(
  //     <Notifications
  //       displayDrawer={true}
  //       listNotifications={listNotifications}
  //       markAsRead={mockMarkAsRead}
  //     />
  //   );

  //   fireEvent.click(screen.getByText("New course available"));
  //   expect(mockMarkAsRead).toHaveBeenCalledWith(1);

  //   fireEvent.click(screen.getByText("New resume available"));
  //   expect(mockMarkAsRead).toHaveBeenCalledWith(2);

  //   fireEvent.click(screen.getByText(/Urgent requirement/i));
  //   expect(mockMarkAsRead).toHaveBeenCalledWith(3);
  // });

 it("calls handleDisplayDrawer when the menu item is clicked", () => {
   const handleDisplayDrawer = jest.fn();
   const handleHideDrawer = jest.fn();

   const wrapper = shallow(
     <Notifications
       handleDisplayDrawer={handleDisplayDrawer}
       handleHideDrawer={handleHideDrawer}
     />
   );

   wrapper.find("div").at(0).simulate("click");

   expect(handleDisplayDrawer).toHaveBeenCalled();
   expect(handleHideDrawer).not.toHaveBeenCalled();

   jest.restoreAllMocks();
 });




  it("calls handleHideDrawer when the close button is clicked", () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );
    wrapper.find("button").simulate("click");
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
