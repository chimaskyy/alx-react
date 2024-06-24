import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import AppContext from "../App/AppContext";

describe("Footer Component Tests", () => {
  it("Renders without crashing", () => {
    render(<Footer />);
    const footerElement = screen.getByText(/Copyright/i);
    expect(footerElement).toBeInTheDocument();
  });

  it("Renders copyright text", () => {
    render(<Footer />);
    const footerElement = screen.getByText(/Copyright/i);
    expect(footerElement).toBeInTheDocument();
  });

  it("Does not display the contact link when user is logged out", () => {
    const contextValue = { user: { isLoggedIn: false } };
    render(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    const contactLink = screen.queryByText(/Contact us/i);
    expect(contactLink).toBeNull();
  });

  it("Displays the contact link when user is logged in", () => {
    const contextValue = { user: { isLoggedIn: true } };
    render(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    const contactLink = screen.getByText(/Contact us/i);
    expect(contactLink).toBeInTheDocument();
  });
});
