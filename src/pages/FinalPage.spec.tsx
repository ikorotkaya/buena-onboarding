import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import FinalPage from "./FinalPage";

describe("Final Page", () => {
  test("renders thank you message", () => {
    render(<FinalPage />, { wrapper: BrowserRouter });
    const thankYouMessage = screen.getByText("Thank you for your submission!");
    expect(thankYouMessage).toBeInTheDocument();
  });

  test("renders submission confirmation", () => {
    render(<FinalPage />, { wrapper: BrowserRouter });
    const submissionConfirmation = screen.getByText(
      "We will be in touch shortly."
    );
    expect(submissionConfirmation).toBeInTheDocument();
  });
});
