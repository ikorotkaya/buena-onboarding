import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import NoMatch from "./NoMatch";

describe("NoMatch page", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <NoMatch />
        </BrowserRouter>
      </I18nextProvider>
    );
  });

  test("renders the 404 headline", () => {
    const headline = screen.getByText("404");
    expect(headline).toBeInTheDocument();
  });

  test("renders the headline", () => {
    const headline = screen.getByText("Page not found");
    expect(headline).toBeInTheDocument();
  });

  test("renders the subheadline", () => {
    const subheadline = screen.getByText(
      "Sorry, we couldn't find the page you're looking for."
    );
    expect(subheadline).toBeInTheDocument();
  });

  test("renders Go back home buttton", () => {
    const linkElement = screen.getByRole("link", { name: "Go back home" });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
