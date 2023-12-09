import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="h-screen bg-slate-300 hidden md:block">
      <div className="px-8 py-4">
        <Link
          to="/">
          <img src="/logo.svg" alt="Buena" />
        </Link>
      </div>
    </div>
  );
}
