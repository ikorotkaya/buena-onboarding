import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import HomePage from "./HomePage";
import i18n from "../i18n";
// https://testing-library.com/docs/example-react-router/

describe("HomePage component", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </I18nextProvider>
    );
  });

  test("renders welcome message", () => {
    const welcomeMessage = screen.getByText("Welcome to Buena");
    expect(welcomeMessage).toBeInTheDocument();
  });

  test("renders description", () => {
    const description = screen.getByText(
      "Enter your personal details and start your journey today."
    );
    expect(description).toBeInTheDocument();
  });

  test("renders GetStartedButton", () => {
    const getStartedButton = screen.getByTestId("homepage-cta");
    expect(getStartedButton).toBeInTheDocument();
  });
});
