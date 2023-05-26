import { NavigationLinks } from "./NavLinks";
import logo from "../images/logo.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="flex flex-col md:flex-row items-center justify-between py-4">
        <nav className="md:ml-10 mb-4 md:mb-0">
          <ul className="flex space-x-10">
            <NavigationLinks />
          </ul>
        </nav>
        <div className="flex flex-col items-center md:flex-row md:items-center md:mr-10">
          <span className="text-center py-2 px-2 md:pr-4">
            © Jordan Aston, William Robertson, Connie Jacques, & Sarah Landis 2023.
          </span>
          <img src={logo} alt="Logo" className="w-20 h-20 ml-0 md:ml-10" />
        </div>
      </div>
    </footer>
  );
}

  
  