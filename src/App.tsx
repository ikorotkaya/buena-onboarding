import './App.css'
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Name from './onboarding/screens/Name';
import Email from './onboarding/screens/Email';
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

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
