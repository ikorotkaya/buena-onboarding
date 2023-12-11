import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FinalPage from "./FinalPage";
import { BrowserRouter } from "react-router-dom";

describe("Final Page", () => {
  test("renders thank you message", () => {
    render(<FinalPage />, { wrapper: BrowserRouter });
    const thankYouMessage = screen.getByText("Thank you for your submission!");
    expect(thankYouMessage).toBeInTheDocument();
  });

  test("renders submission confirmation", () => {
    render(<FinalPage />, { wrapper: BrowserRouter });
    const submissionConfirmation = screen.getByTestId(
      "submission-confirmation"
    );
    expect(submissionConfirmation).toBeInTheDocument();
  });
});
