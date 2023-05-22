import { Navbar } from "./Navbar"
import { Searchbar } from "./Searchbar"



export function Header(){
    return(
        <div className="Header">
            <Navbar />
            <Searchbar />
        </div>  
    )
}