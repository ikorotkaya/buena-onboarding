import { Outlet } from "react-router-dom";
import OnboardingNavbar from "./components/OnboardingNavbar";

export default function OnboardingLayout() {

  return (
    <div className="container">
      <OnboardingNavbar />

      <Outlet />
    </div>
  );
}
