import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import AppContext, { user, logOut } from "../App/AppContext";
import { StyleSheetTestUtils } from "aphrodite";


beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
describe("Header Component Tests", () => {
  it("Renders without crashing", () => {
    render(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.getByText("School dashboard")).toBeInTheDocument();
  });

  it("renders img and h1 tags", () => {
    render(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByText("School dashboard")).toBeInTheDocument();
  });

  it("renders logout section when user is logged in", () => {
    const loggedInUser = { email: "test@example.com", isLoggedIn: true };
    render(
      <AppContext.Provider value={{ user: loggedInUser, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.getByText(/Welcome test@example.com/)).toBeInTheDocument();
    expect(screen.getByText("logout")).toBeInTheDocument();
  });

  it("calls logOut function when logout is clicked", () => {
    const loggedInUser = { email: "test@example.com", isLoggedIn: true };
    const mockLogOut = jest.fn();
    render(
      <AppContext.Provider value={{ user: loggedInUser, logOut: mockLogOut }}>
        <Header />
      </AppContext.Provider>
    );

    fireEvent.click(screen.getByText("logout"));
    expect(mockLogOut).toHaveBeenCalledTimes(1);
  });
});