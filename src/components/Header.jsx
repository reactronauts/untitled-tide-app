import { Navbar } from "./Navbar"
import { Searchbar } from "./Searchbar"

export function Header(){
    return(
        <div className="bg-yellow font-serif">
            <Navbar />
            <Searchbar />
        </div>  
    );
}