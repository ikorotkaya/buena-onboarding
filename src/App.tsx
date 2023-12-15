import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout";
import OnboardingLayout from "./OnboardingLayout";
import Name from "./pages/onboarding/Name";
import Email from "./pages/onboarding/Email";
import PhoneNumber from "./pages/onboarding/PhoneNumber";
import Income from "./pages/onboarding/Income";
import Summary from "./pages/onboarding/Summary";
import HomePage from "./pages/HomePage";
import NoMatch from "./pages/NoMatch";
import FinalPage from "./pages/FinalPage";
import { useOnboardingStore } from "./store";
import { getCurrentPageIndex } from "./utils/onboarding-routing";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState<string>("en");

  const { setCurrentPageIndex } = useOnboardingStore();
  const location = useLocation();

  useEffect(() => {
    setLocale(i18n.language);
    setCurrentPageIndex(getCurrentPageIndex());
    console.log(locale);
  }, [i18n.language]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setCurrentPageIndex(getCurrentPageIndex());
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Routes>
        <Route path="/">
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NoMatch />} />
            <Route path="/final-page" element={<FinalPage />} />
          </Route>

          <Route path="/onboarding" element={<OnboardingLayout />}>
            <Route path="name" element={<Name />} />
            <Route path="email" element={<Email />} />
            <Route path="phone" element={<PhoneNumber />} />
            <Route path="income" element={<Income />} />
            <Route path="summary" element={<Summary />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
