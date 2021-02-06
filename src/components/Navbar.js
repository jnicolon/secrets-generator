import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/addsecret">Add a Secret</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
