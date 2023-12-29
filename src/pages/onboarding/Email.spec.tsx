import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Email from "./Email";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

describe("Email onboarding screen", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Email />
        </BrowserRouter>
      </I18nextProvider>
    );
  });

  test("renders the headline correctly", () => {
    expect(screen.getByText("What's your email address?")).toBeInTheDocument();
  });

  test("renders the input field", () => {
    const inputField = screen.getByPlaceholderText("you@example.com");

    expect(inputField).toBeInTheDocument();
  });

  describe("when the input is blank", () => {
    test("does NOT show error message ", () => {
      expect(screen.queryByTestId("input-error")).toBeNull();
    });
  });

  describe("when the input is invalid", () => {
    test("shows error message ", () => {
      const inputElement = screen.getByPlaceholderText("you@example.com");

      fireEvent.change(inputElement, { target: { value: "your@email" } });
      expect(screen.getByTestId("input-error")).toBeInTheDocument();
    });

    test('disables the "Next" button', () => {
      const inputElement = screen.getByPlaceholderText("you@example.com");

      fireEvent.change(inputElement, { target: { value: "your@email" } });
      expect(screen.getByTestId("next-button")).toHaveClass(
        "pointer-events-none"
      );
    });
  });

  describe("when the input is valid", () => {
    test("does NOT show error message ", () => {
      const inputElement = screen.getByPlaceholderText("you@example.com");

      fireEvent.change(inputElement, {
        target: { value: "email@example.com" }
      });
      expect(screen.queryByTestId("input-error")).not.toBeInTheDocument();
    });

    test('enables the "Next" button', () => {
      const inputElement = screen.getByPlaceholderText("you@example.com");
      fireEvent.change(inputElement, {
        target: { value: "email@example.com" }
      });
      expect(screen.getByTestId("next-button")).not.toHaveClass(
        "pointer-events-none"
      );
    });
  });
});
