import React, { useState } from "react";

function CreateUser() {
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
    <div className="addSecret-container">
      <form onSubmit={handleSubmit} className="addSecret-form">
        <label> Enter your username.</label>
        <input
          className="createUser-input"
          type="text"
          onChange={handleChange}
        ></input>
        {error && (
          <>
            <p className="createUser-error">That user already exists!</p>
            <p className="createUser-error">
              User must be at least 3 characters long!
            </p>
          </>
        )}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateUser;
