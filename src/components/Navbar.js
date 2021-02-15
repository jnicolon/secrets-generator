import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../imgs/logo/logo.jpg";
import { useSelector } from "react-redux";

function Navbar() {
  const location = useLocation();
  const isLoggedIn = useSelector(({ users }) => users.isLoggedIn);
  const currentUser = useSelector(({ users }) => users.currentUser);

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
        {isLoggedIn ? (
          <li
            style={{ border: "solid 1px white" }}
          >{`Hello ${currentUser}`}</li>
        ) : null}
        {isLoggedIn ? (
          <li
            className={location.pathname === "/favorites" ? "nav-selected" : ""}
          >
            <Link to="/usersecrets">Your Secrets</Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default Navbar;
