import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Summary from "./Summary";
import { BrowserRouter } from "react-router-dom";
import { useOnboardingStore } from "../../store";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

describe("Summary onboarding screen", () => {
  const initStoreState = useOnboardingStore.getState();

  beforeEach(() => {
    useOnboardingStore.setState(initStoreState);
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Summary />
        </BrowserRouter>
      </I18nextProvider>
    );
  });

  test("renders the headline correctly", () => {
    expect(screen.getByText("Please review your details:")).toBeInTheDocument();
  });

  describe("when onboarding data is valid", () => {
    beforeEach(() => {
      useOnboardingStore.setState({
        name: "John Doe",
        email: "john@doe.com",
        phoneNumber: "+49123456789",
        income: "1000-2000",
        nameValid: true,
        emailValid: true,
        phoneNumberValid: true,
        incomeValid: true
      });
    });

    test("shows user input", () => {
      const summary = screen.getByTestId("summary");

      expect(summary).toHaveTextContent("Name:John Doe");
      expect(summary).toHaveTextContent("Email:john@doe.com");
      expect(summary).toHaveTextContent("Phone Number:+49123456789");
      expect(summary).toHaveTextContent("Income:1000-2000");
    });

    test("renders clickable submit button", () => {
      const submitButton = screen.getByTestId("submit-button");

      expect(submitButton).not.toHaveClass("pointer-events-none");
    });
  });

  describe("when onboarding data is blank", () => {
    beforeEach(() => {
      useOnboardingStore.setState({
        name: "",
        email: "",
        phoneNumber: "",
        income: "",
        nameValid: false,
        emailValid: false,
        phoneNumberValid: false,
        incomeValid: false
      });
    });

    test("shows user input", () => {
      const summary = screen.getByTestId("summary");

      expect(summary).toHaveTextContent("Name:");
      expect(summary).toHaveTextContent("Email:");
      expect(summary).toHaveTextContent("Phone Number:");
      expect(summary).toHaveTextContent("Income:");
    });

    test("renders disabled submit button", () => {
      const submitButton = screen.getByTestId("submit-button");

      expect(submitButton).toHaveClass("pointer-events-none");
    });
  });

  describe("when onboarding data is partially valid", () => {
    beforeEach(() => {
      useOnboardingStore.setState({
        name: "",
        email: "john@doe.com",
        phoneNumber: "+49123456789",
        income: "",
        nameValid: false,
        emailValid: false,
        phoneNumberValid: false,
        incomeValid: false
      });
    });

    test("shows user input", () => {
      const summary = screen.getByTestId("summary");

      expect(summary).toHaveTextContent("Name:");
      expect(summary).toHaveTextContent("Email:john@doe.com");
      expect(summary).toHaveTextContent("Phone Number:+49123456789");
      expect(summary).toHaveTextContent("Income:");
    });

    test("renders disabled submit button", () => {
      const submitButton = screen.getByTestId("submit-button");

      expect(submitButton).toHaveClass("pointer-events-none");
    });
  });
});
