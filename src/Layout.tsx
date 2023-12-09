import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout() {

  return (
    <div className="container grid grid-rows-[6vh,1fr] min-h-screen h-screen px-5">
      <Navbar />

      <Outlet />
    </div>
  );
}
