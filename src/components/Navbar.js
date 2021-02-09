import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../imgs/logo/logo.jpg";

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar-container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul>
        <li className={location.pathname === "/addsecret" && "nav-selected"}>
          <Link to="/addsecret">Add a Secret</Link>
        </li>
        <li className={location.pathname === "/favorites" && "nav-selected"}>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li className={location.pathname === "/createuser" && "nav-selected"}>
          <Link to="/createuser">Create User</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
