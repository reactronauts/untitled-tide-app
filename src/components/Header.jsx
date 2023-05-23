import { Navbar } from "./Navbar"
import { Searchbar } from "./Searchbar"

export function Header(){
    return(
        <div className="bg-orange">
            <Navbar />
            <Searchbar />
        </div>  
    );
}