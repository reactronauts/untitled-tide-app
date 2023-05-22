import { NavLink } from "react-router-dom";

export function Navbar(props){
    let activeNavStyle = {
        textDecorationColor: "green",
        textDecorationLine: "line-through"
    }

    return(
        <nav>
            <ul>
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
                        Astro
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tides" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        Tidal
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    )
}