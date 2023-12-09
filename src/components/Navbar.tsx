import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="px-8 py-4">
      <div>
        <Link
          to="/">
          <img src="/logo.svg" alt="Buena" />
        </Link>
      </div>
    </nav>
  )
}