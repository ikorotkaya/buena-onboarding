import { Routes, Route, useLocation } from "react-router-dom";
import Layout from './Layout';
import OnboardingLayout from './OnboardingLayout';
import Name from './pages/onboarding/Name';
import Email from './pages/onboarding/Email';
import PhoneNumber from './pages/onboarding/PhoneNumber';
import Income from './pages/onboarding/Income';
import Summary from './pages/onboarding/Summary';
import HomePage from './pages/HomePage';
import NoMatch from './pages/NoMatch';
import { useOnboardingStore } from './store';
import { getCurrentPageIndex } from './utils/onboarding-routing';
import { useEffect } from 'react';

function App() {
  const { setCurrentPageIndex } = useOnboardingStore();
  const location = useLocation();

  useEffect (() => {
    setCurrentPageIndex(getCurrentPageIndex());
  }, []);

  useEffect(() => {
    setCurrentPageIndex(getCurrentPageIndex());
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/">
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NoMatch />} />
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
  )
}

export default App
