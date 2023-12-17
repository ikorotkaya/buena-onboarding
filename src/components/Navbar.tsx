import { Link } from "react-router-dom";
import logo from "../../public/icons/logo.svg";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({
  showLanguageSwitcher = true
}: {
  showLanguageSwitcher?: boolean;
}) {
  return (
    <nav className="flex h-20 max-h-20 items-center justify-between px-8 py-7">
      <Link to="/">
        <img className="h-5" src={logo} alt="Buena" />
      </Link>

      {showLanguageSwitcher && <LanguageSwitcher />}
    </nav>
  );
}
