import './App.css'
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Name from './pages/onboarding/screens/Name';
import Email from './pages/onboarding/screens/Email';
import PhoneNumber from './pages/onboarding/screens/PhoneNumber';
import Income from './pages/onboarding/screens/Income';
import Summary from './pages/onboarding/screens/Summary';
import HomePage from './pages/HomePage';
import NoMatch from './pages/NoMatch';

function App() {
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
