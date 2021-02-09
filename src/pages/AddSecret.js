import React, { useState } from "react";

function AddSecret() {
  const [secret, setSecret] = useState("");

  const handleChange = (e) => {
    setSecret(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(secret);
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
