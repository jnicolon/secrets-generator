import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSignInModal } from "../redux/actions/userActions";

function AddSecret({ history }) {
  const [secret, setSecret] = useState("");
  const user = useSelector((state) => state.users.currentUser);
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);
  const dispatch = useDispatch();

  const handleModal = (status) => {
    dispatch(setSignInModal(true));
  };

  const handleChange = (e) => {
    setSecret(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let userName;
    if (user === "") {
      userName = "Anonymous";
    } else {
      userName = user;
    }
    axios
      .post("http://localhost:5000/secrets/add", { secret, userName })
      .then((res) => {
        console.log("Secret added");
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="addSecret-container">
      <form onSubmit={handleSubmit} className="addSecret-form">
        <label> Enter your secret (max 50char)</label>
        <textarea
          onChange={handleChange}
          maxLength={150}
          rows={8}
          cols={20}
          className="addSecret-text-area"
          name={secret}
        />
        <button>Submit</button>
        <br />
        {isLoggedIn ? null : (
          <p className="addSecret-form-info">
            If you want to keep track of your secrets
            <br />
            <span onClick={() => handleModal(true)}> SIGN IN </span>
            or
            <Link to="/createuser">
              <span> CREATE A USER </span>
            </Link>
          </p>
        )}
      </form>
    </div>
  );
}

export default AddSecret;
