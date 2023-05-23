import { DarkMode } from "./DarkMode";
import { NavigationLinks } from "./NavLinks";

// import { Searchbar } from "../components/Searchbar";


export function Navbar(){
 
    return(
        <nav className="flex justify-between px-4 py-6 items-center" >
            {/* <Searchbar /> */}
            <div className="flex items-center">
                <h1 className="mr-2 text-xl font-bold">moonswell</h1>
                <button className="DarkMode" onClick={DarkMode}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                </button>
            </div>
            <ul className="flex px-4 py-6 text-center space-x-10 text-xl">
                <NavigationLinks />
            </ul>
        </nav>
    );
}