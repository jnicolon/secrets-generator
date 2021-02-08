import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo/logo.jpg";

function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/addsecret">Add a Secret</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/createuser">Create User</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
