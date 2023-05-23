import { NavigationLinks } from "./NavLinks";
// import { Searchbar } from "../components/Searchbar";


export function Footer(){
    return(
        <footer className="bg-gray-900 text-white w-full">
            <div className="flex justify-center py-4">
                {/* <nav className="fixed bottom-0 w-full bg-gray-900 text-white" > */}
                <nav>
                    <ul className="flex justify-center py-4 space-x-10">
                        <NavigationLinks />
                    </ul>
                </nav>
            </div>
            <div className="text-center py-2">
                Rights and Ownership to Connie Jacques, Will Robertson, Jordan Aston, & Sarah Landis.
                <br />
                Designed and created in 2023.
            </div>
        </footer>

    );
}