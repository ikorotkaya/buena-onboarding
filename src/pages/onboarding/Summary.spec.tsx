import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Summary from "./Summary";
import { BrowserRouter } from "react-router-dom";

describe("Summary onboarding screen", () => {
  test("renders the headline correctly", () => {
    render(<Summary />, { wrapper: BrowserRouter });

    expect(screen.getByText("Check your info:")).toBeInTheDocument();
  });
});
