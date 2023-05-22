import { NavLink } from "react-router-dom";
// import { Searchbar } from "../components/Searchbar";


export function Navbar(){
    let activeNavStyle = {
        textDecorationColor: "darkblue",
        textDecorationLine: "line-through"
    }

    return(
        <nav className="justify-center">
            {/* <Searchbar /> */}
            <ul className="flex px-4 py-6 text-center w-screen justify-around self-end ml-1/2 bg-orange-700">
                <li>
                    <NavLink to="/" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/weather" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        Weather
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/lunar" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        Lunar
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tides" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        Tides
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    )
}