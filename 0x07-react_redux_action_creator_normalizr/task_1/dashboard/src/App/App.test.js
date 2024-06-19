import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("App Component Tests", () => {
  it("Renders without crashing", () => {
    const { getByText } = render(<App />);
    expect(getByText(/School dashboard/)).toBeInTheDocument();
  });

  it("should render Header component", () => {
    const { getByText } = render(<App />);
    expect(getByText("School dashboard")).toBeInTheDocument();
  });

  it("should render Login Component", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Log in to continue/i)).toBeInTheDocument();
  });

  it("should render Footer Component", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Copyright/)).toBeInTheDocument();
  });

  it("CourseList is not displayed by default", () => {
    const { queryByText } = render(<App />);
    expect(queryByText("Course list")).not.toBeInTheDocument();
  });

  // it("calls logOut and shows alert when ctrl+h is pressed", () => {
  //   window.alert = jest.fn(); // Mock alert
  //   const { getByText } = render(<App />);

  //   // Use a more flexible matcher
  //   const loginElement = getByText(/Log in to continue/i);

  //   // Simulate user interaction
  //   fireEvent.click(loginElement);
  //   fireEvent.keyDown(document, { key: "h", ctrlKey: true });

  //   // Check that the alert is called
  //   expect(window.alert).toHaveBeenCalledWith("Logging you out");
  // });

  it("Has default state for displayDrawer false", () => {
    const { queryByText } = render(<App />);
    expect(queryByText("Your notifications")).not.toBeInTheDocument();
  });

  it("displayDrawer changes to true when calling handleDisplayDrawer", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText("Your notifications"));
    expect(getByText("Here is the list of notifications")).toBeInTheDocument();
  });

  it("displayDrawer changes to false when calling handleHideDrawer", () => {
    const { getByText, getByLabelText } = render(<App />);
    fireEvent.click(getByText("Your notifications"));
    fireEvent.click(getByLabelText("Close"));
    expect(getByText("Your notifications")).toBeInTheDocument();
  });

  it("passes displayDrawer, handleDisplayDrawer, and handleHideDrawer props to Notifications", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText("Your notifications"));
    expect(getByText("Here is the list of notifications")).toBeInTheDocument();
  });

  it("logIn function updates the state correctly", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Log in to continue/i));
    expect(getByText("Course list")).toBeInTheDocument();
  });

  it("logOut function updates the state correctly", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText(/Log in to continue/i));
    fireEvent.keyDown(document, { key: "h", ctrlKey: true });
    expect(getByText(/Log in to continue/i)).toBeInTheDocument();
  });

  describe("when user is logged in", () => {
    it("does not include the Login component", () => {
      const { queryByText } = render(<App />);
      fireEvent.click(queryByText(/Log in to continue/i));
      expect(
        queryByText("Login to access the full dashboard")
      ).not.toBeInTheDocument();
    });

    it("includes the CourseList component", () => {
      const { getByText } = render(<App />);
      fireEvent.click(getByText(/Log in to continue/i));
      expect(getByText("Course list")).toBeInTheDocument();
    });
  });
});
