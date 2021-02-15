import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignInModal } from "../redux/actions/userActions";

function LogIn() {
  const [userName, setUserName] = useState("");
  const [error, seterror] = useState(false);
  const dispatch = useDispatch();

  const handleModal = (status) => {
    dispatch(setSignInModal(status));
  };

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
        <div onClick={() => handleModal(false)} className="close-modal">
          X
        </div>
        <h2 className="login-title">Sign In</h2>
        <form onSubmit={handleSubmit} className="login-contaienr">
          <label>If you already have a user enter it here:</label>
          <input onChange={handleChange} type="text"></input>
          {error && (
            <p className="createUser-error">That user doesn't exist!</p>
          )}
          <button>Sign in</button>
        </form>
        <p>
          Otherwise
          <Link
            onClick={() => handleModal(false)}
            className="login-user-btn"
            to="/createuser"
          >
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
