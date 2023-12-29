import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhoneNumber from "./PhoneNumber";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

describe("PhoneNumber onboarding screen", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <PhoneNumber />
        </BrowserRouter>
      </I18nextProvider>
    );
  });

  test("renders the headline correctly", () => {
    expect(screen.getByText("What's your phone number?")).toBeInTheDocument();
  });

  test("renders the input field", () => {
    const inputField = screen.getByPlaceholderText("+49 123 456 7890");

    expect(inputField).toBeInTheDocument();
  });

  describe("when the input is blank", () => {
    test("does NOT show error message ", () => {
      expect(screen.queryByTestId("input-error")).toBeNull();
    });
  });

  describe("when the input is invalid (less than 10 characters)", () => {
    test("shows error message ", () => {
      const inputElement = screen.getByPlaceholderText("+49 123 456 7890");

      fireEvent.change(inputElement, { target: { value: "1234567" } });
      expect(screen.getByTestId("input-error")).toBeInTheDocument();
    });

    test('disables the "Next" button', () => {
      const inputElement = screen.getByPlaceholderText("+49 123 456 7890");

      fireEvent.change(inputElement, { target: { value: "1234567" } });
      expect(screen.getByTestId("next-button")).toHaveClass(
        "pointer-events-none"
      );
    });
  });

  describe("when the input is valid (at least 10 characters)", () => {
    test("does NOT show error message ", () => {
      const inputElement = screen.getByPlaceholderText("+49 123 456 7890");

      fireEvent.change(inputElement, { target: { value: "1234567890" } });
      expect(screen.queryByTestId("input-error")).not.toBeInTheDocument();
    });

    test('enables the "Next" button', () => {
      const inputElement = screen.getByPlaceholderText("+49 123 456 7890");
      fireEvent.change(inputElement, { target: { value: "1234567890" } });
      expect(screen.getByTestId("next-button")).not.toHaveClass(
        "pointer-events-none"
      );
    });
  });
});
