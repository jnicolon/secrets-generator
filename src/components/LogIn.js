import React, { useState } from "react";
import { Link } from "react-router-dom";

function LogIn() {
  const [userName, setUserName] = useState("");
  const [error, seterror] = useState(false);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
  };

  return (
    <>
      <div className="modal-bg"></div>
      <div className="login-container">
        <h2 className="login-title">
          You need a user to add a secret or see your favorites
        </h2>
        <form onSubmit={handleSubmit} className="login-contaienr">
          <label>If you already have a user enter it here:</label>
          <input onChange={handleChange} type="text"></input>
          {error && (
            <p className="createUser-error">That user doesn't exist!</p>
          )}
          <button>Log in</button>
        </form>
        <p>
          Otherwise
          <Link className="login-user-btn" to="/createuser">
            {" "}
            create a user
          </Link>
          .
        </p>
      </div>
    </>
  );
}

export default LogIn;
