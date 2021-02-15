import React, { useState } from "react";
import { setCurrentUser, setSignInModal } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import axios from "axios";

function CreateUser() {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserName(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/users/add`, { userName })
      .then(() => {
        dispatch(setCurrentUser(userName, true));
        setUserCreated(true);
      })
      .catch((err) => {
        if (err.response.data === "Error: 11000") {
          setError("User already exists");
        } else {
          setError("User must be at least 3 characters long");
        }
        console.log(err.response);
      });
  };

  if (!userCreated) {
    return (
      <div className="addSecret-container">
        <form onSubmit={handleSubmit} className="addSecret-form">
          <label> Enter your username.</label>
          <input
            className="createUser-input"
            type="text"
            onChange={handleChange}
          ></input>
          {error !== "" && (
            <>
              <p className="createUser-error">{error}</p>
            </>
          )}

          <button>Create</button>
          <br />
          <p>
            If you already have a user
            <span
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(setSignInModal(true))}
            >
              {" "}
              SIGN IN
            </span>
          </p>
        </form>
      </div>
    );
  } else {
    return (
      <div className="addSecret-container">
        <div className="add-secret-form">
          <br /> <br />
          <h4>User succesfully created.</h4>
        </div>
      </div>
    );
  }
}

export default CreateUser;
