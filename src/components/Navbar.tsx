import { Link } from "react-router-dom";
import logo from "../icons/logo.svg";

export default function Navbar() {
  return (
    <nav className="px-8 py-4">
      <div>
        <Link
          to="/">
          <img 
            className="w-16" 
            src={logo} 
            alt="Buena" />
        </Link>
      </div>
    </nav>
  )
}