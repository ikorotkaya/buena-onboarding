import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FinalPage from "./FinalPage";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

describe("Final Page", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <FinalPage />
        </BrowserRouter>
      </I18nextProvider>
    );
  });

  test("renders thank you message", () => {
    const thankYouMessage = screen.getByText("Thank you for your submission!");
    expect(thankYouMessage).toBeInTheDocument();
  });

  test("renders submission confirmation", () => {
    const submissionConfirmation = screen.getByText(
      "We will be in touch shortly."
    );
    expect(submissionConfirmation).toBeInTheDocument();
  });
});
