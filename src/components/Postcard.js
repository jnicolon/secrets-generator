import React from "react";

function Postcard({ text, direction }) {
  return (
    <div className={`postcard-container ${direction}`}>
      <h1 className="postcard-text">{text}</h1>
    </div>
  );
}

export default Postcard;
