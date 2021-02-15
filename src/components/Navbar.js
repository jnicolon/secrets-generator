import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../imgs/logo/logo.jpg";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/actions/userActions";

function Navbar() {
  const location = useLocation();
  const [userModal, setUserModal] = useState(false);
  const isLoggedIn = useSelector(({ users }) => users.isLoggedIn);
  const currentUser = useSelector(({ users }) => users.currentUser);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setCurrentUser("", false));
    setUserModal(false);
  };

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
            onClick={() => {
              setUserModal(true);
            }}
            style={{ border: "solid 1px white" }}
          >
            {userModal && (
              <div className="navbar-user-modal">
                <h3 onClick={() => logOut()} className="navbar-log-out-btn">
                  Sign Out
                </h3>
              </div>
            )}
            {`Hello ${currentUser}`}
          </li>
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
