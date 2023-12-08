import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div>
        <Link
          to="/">
          <img src="/logo.svg" alt="Buena" />
        </Link>
      </div>
    </nav>
  )
}