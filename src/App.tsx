import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
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

  useEffect (() => {
    setCurrentPageIndex(getCurrentPageIndex());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="onboarding/name" element={<Name />} />
          <Route path="onboarding/email" element={<Email />} />
          <Route path="onboarding/phone" element={<PhoneNumber />} />
          <Route path="onboarding/income" element={<Income />} />
          <Route path="onboarding/summary" element={<Summary />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
