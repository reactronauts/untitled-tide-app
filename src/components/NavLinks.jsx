import { NavLink } from "react-router-dom";

export function NavigationLinks() {
    let activeNavStyle = {
      color: "white",
      fontStyle: "italic",
    };
  
    return (
      <>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => isActive ? activeNavStyle : undefined}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/weather"
            style={({ isActive }) => isActive ? activeNavStyle : undefined}
          >
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/lunar"
            style={({ isActive }) => isActive ? activeNavStyle : undefined}
          >
            Lunar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tides"
            style={({ isActive }) => isActive ? activeNavStyle : undefined}
          >
            Tides
          </NavLink>
        </li>
      </>
    );
}