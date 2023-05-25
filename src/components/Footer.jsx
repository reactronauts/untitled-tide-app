import { NavigationLinks } from "./NavLinks";
// import { Searchbar } from "../components/Searchbar";


export function Footer() {
    return (
      <footer className="bg-gray-900 text-white w-full">
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          <nav className="md:ml-10">
            <ul className="flex space-x-10">
              <NavigationLinks />
            </ul>
          </nav>
          <div className="flex items-center md:mr-10">
            <span className="text-center py-2">
              © Jordan Aston, William Robertson, Connie Jacques, & Sarah Landis 2023.
            </span>
            <img
                src="../images/logo.png"
                alt="Logo"
                className="w-10 h-10 ml-10"
            />
          </div>
        </div>
      </footer>
    );

}
  
  