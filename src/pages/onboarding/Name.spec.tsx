import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Name from "./Name";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

describe("Name onboarding screen", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Name />
        </BrowserRouter>
      </I18nextProvider>
    );
  });

  test("renders the headline correctly", () => {
    expect(screen.getByText("What's your name?")).toBeInTheDocument();
  });

  test("renders the input field", () => {
    const inputField = screen.getByPlaceholderText("Jane Smith");

    expect(inputField).toBeInTheDocument();
  });

  describe("when the input is blank", () => {
    test("does NOT show error message ", () => {
      // https://stackoverflow.com/questions/52783144/how-do-you-test-for-the-non-existence-of-an-element-using-jest-and-react-testing
      expect(screen.queryByTestId("input-error")).toBeNull();
    });
  });

  describe("when the input is invalid (too short)", () => {
    test("shows error message ", () => {
      const inputElement = screen.getByPlaceholderText("Jane Smith");

      fireEvent.change(inputElement, { target: { value: "A" } });
      expect(screen.getByTestId("input-error")).toBeInTheDocument();
    });

    test('disables the "Next" button', () => {
      const inputElement = screen.getByPlaceholderText("Jane Smith");

      fireEvent.change(inputElement, { target: { value: "A" } });
      expect(screen.getByTestId("next-button")).toHaveClass(
        "pointer-events-none"
      );
    });
  });

  describe("when the input is valid (at least 2 characters)", () => {
    test("does NOT show error message ", () => {
      const inputElement = screen.getByPlaceholderText("Jane Smith");

      fireEvent.change(inputElement, { target: { value: "John Doe" } });
      expect(screen.queryByTestId("input-error")).not.toBeInTheDocument();
    });

    test('enables the "Next" button', () => {
      const inputElement = screen.getByPlaceholderText("Jane Smith");

      fireEvent.change(inputElement, { target: { value: "John Doe" } });
      expect(screen.getByTestId("next-button")).not.toHaveClass(
        "pointer-events-none"
      );
    });
  });
});
