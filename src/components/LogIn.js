import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSignInModal, signIn } from "../redux/actions/userActions";

function LogIn() {
  const [userName, setUserName] = useState("");
  const logInError = useSelector((state) => state.users.logInError);
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const dispatch = useDispatch();

  const handleModal = (status) => {
    dispatch(setSignInModal(status));
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(userName));
  };

  useEffect(() => {
    isLoggedIn && dispatch(setSignInModal(false));
  }, [dispatch, isLoggedIn]);

  return (
    <>
      {isLoggedIn && <Redirect to="/"></Redirect>}
      <div className="modal-bg"></div>
      <div className="login-container">
        <div onClick={() => handleModal(false)} className="close-modal">
          X
        </div>
        <h2 className="login-title">Sign In</h2>
        <form onSubmit={handleSubmit} className="login-contaienr">
          <label>If you already have a user enter it here:</label>
          <input onChange={handleChange} type="text"></input>
          {logInError !== "" && (
            <p className="createUser-error">{logInError}</p>
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
