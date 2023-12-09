import { Outlet } from "react-router-dom";
import OnboardingNavbar from "./components/OnboardingNavbar";

export default function OnboardingLayout() {

  return (
    <div className="container grid grid-rows-[6vh,1fr] min-h-screen h-screen px-6">
      <OnboardingNavbar />

      <Outlet />
    </div>
  );
}
