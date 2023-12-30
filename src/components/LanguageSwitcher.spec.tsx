import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { BrowserRouter } from "react-router-dom";

describe("Language Switcher", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <LanguageSwitcher />
        </BrowserRouter>
      </I18nextProvider>
    );
  });

  test("renders language icon", () => {
    expect(screen.getByTestId("language-switcher-icon")).toBeInTheDocument();
  });

  test("renders language dropdown menu when language icon is clicked", () => {
    const languageIcon = screen.getByTestId("language-switcher-icon");
    fireEvent.click(languageIcon);
    expect(screen.getByText("English")).toBeInTheDocument();
  });

  test("renders two languages in the dropdown menu", () => {
    const languageIcon = screen.getByTestId("language-switcher-icon");
    fireEvent.click(languageIcon);
    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("German")).toBeInTheDocument();
  });

  test("closes language dropdown menu when language icon is clicked again", () => {
    const languageIcon = screen.getByTestId("language-switcher-icon");
    fireEvent.click(languageIcon);
    fireEvent.click(languageIcon);
    expect(screen.queryByText("English")).not.toBeInTheDocument();
  });

  test("closes language dropdown menu when language icon is clicked outside of the menu", () => {
    const languageIcon = screen.getByTestId("language-switcher-icon");
    fireEvent.click(languageIcon);
    fireEvent.click(document.body);
    expect(screen.queryByText("English")).not.toBeInTheDocument();
  });
});
