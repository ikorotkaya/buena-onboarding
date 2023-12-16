import { Link } from "react-router-dom";
import logo from "../../public/icons/logo.svg";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-7 h-20 max-h-20">
      <Link to="/">
        <img className="h-5" src={logo} alt="Buena" />
      </Link>
      <LanguageSwitcher />
    </nav>
  );
}
