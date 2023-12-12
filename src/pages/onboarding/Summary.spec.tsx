import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Summary from "./Summary";
import { BrowserRouter } from "react-router-dom";
import { useOnboardingStore } from "../../store";

describe("Summary onboarding screen", () => {
  const initStoreState = useOnboardingStore.getState();

  beforeEach(() => {
    useOnboardingStore.setState(initStoreState);
  });

  test("renders the headline correctly", () => {
    render(<Summary />, { wrapper: BrowserRouter });

    expect(screen.getByText("Check your info:")).toBeInTheDocument();
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

      render(<Summary />, { wrapper: BrowserRouter });
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

      render(<Summary />, { wrapper: BrowserRouter });
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

      render(<Summary />, { wrapper: BrowserRouter });
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
