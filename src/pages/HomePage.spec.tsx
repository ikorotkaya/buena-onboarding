import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";

// https://testing-library.com/docs/example-react-router/

describe("HomePage component", () => {
  test("renders welcome message", () => {
    render(<HomePage />, {wrapper: BrowserRouter});
    const welcomeMessage = screen.getByText("Welcome to Buena");
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("renders description", () => {
    render(<HomePage />, {wrapper: BrowserRouter});
    const description = screen.getByText("Enter your personal details and start your journey today.");
    expect(description).toBeInTheDocument();
  });

  test("renders GetStartedButton", () => {
    render(<HomePage />, {wrapper: BrowserRouter});
    const getStartedButton = screen.getByTestId("homepage-cta");
    expect(getStartedButton).toBeInTheDocument();
  });
});