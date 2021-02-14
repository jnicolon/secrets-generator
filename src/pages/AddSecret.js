import React, { useState } from "react";
import axios from "axios";

function AddSecret() {
  const [secret, setSecret] = useState("");

  const handleChange = (e) => {
    setSecret(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/secrets/add", { secret })
      .then(console.log("secret posted"))
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
      </form>
    </div>
  );
}

export default AddSecret;
