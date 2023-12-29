import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Income from "./Income";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

describe("Income onboarding screen", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Income />
        </BrowserRouter>
      </I18nextProvider>
    );
  });

  test("renders the headline correctly", () => {
    expect(screen.getByText("What's your income?")).toBeInTheDocument();
  });

  test("renders the income ranges", () => {
    const incomeRanges = [
      { value: "0-1000", label: "< 1.000 EUR" },
      { value: "1000-2000", label: "1.000 - 2.000 EUR" },
      { value: "2000-3000", label: "2.000 - 3.000 EUR" },
      { value: "3000-4000", label: "3.000 - 4.000 EUR" },
      { value: "4000-plus", label: "> 4.000 EUR" }
    ];

    incomeRanges.forEach((range) => {
      expect(screen.getByLabelText(range.label)).toBeInTheDocument();
    });
  });

  describe("when the input is blank", () => {
    test("disables the 'Next' button", () => {
      expect(screen.getByTestId("next-button")).toHaveClass(
        "pointer-events-none"
      );
    });
  });

  describe("when the input is valid", () => {
    test("enables the 'Next' button", () => {
      const inputElement = screen.getByLabelText("< 1.000 EUR");

      fireEvent.click(inputElement);
      expect(screen.getByTestId("next-button")).not.toHaveClass(
        "pointer-events-none"
      );
    });
  });
});
