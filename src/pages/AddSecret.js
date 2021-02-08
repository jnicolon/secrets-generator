import React from "react";

function AddSecret() {
  return (
    <div className="addSecret-container">
      <form className="addSecret-form">
        <label htmlFor=""> Enter your secret (max 50char)</label>
        <textarea
          MaxLength={150}
          Rows={8}
          Cols={20}
          className="addSecret-text-area"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddSecret;
