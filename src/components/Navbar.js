import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../imgs/logo/logo.jpg";
import { useSelector } from "react-redux";

function Navbar() {
  const location = useLocation();
  const isLoggedIn = useSelector(({ users }) => users.isLoggedIn);

  return (
    <div className="navbar-container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul>
        <li
          className={location.pathname === "/addsecret" ? "nav-selected" : ""}
        >
          <Link to="/addsecret">Add a Secret</Link>
        </li>
        {isLoggedIn ? null : (
          <li
            className={location.pathname === "/favorites" ? "nav-selected" : ""}
          >
            <Link to="/favorites">Favorites</Link>
          </li>
        )}
        {isLoggedIn ? null : (
          <li
            className={
              location.pathname === "/createuser" ? "nav-selected" : ""
            }
          >
            <Link to="/createuser">Create User</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
