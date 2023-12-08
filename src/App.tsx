import './App.css'
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Name from './onboarding/screens/Name';
import Email from './onboarding/screens/Email';
import PhoneNumber from './onboarding/screens/PhoneNumber';
import Income from './onboarding/screens/Income';
import Summary from './onboarding/screens/Summary';
import HomePage from './Home';
import NoMatch from './NoMatch';

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
