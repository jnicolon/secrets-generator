import React from "react";

function Postcard({ text, direction, img }) {
  const style = {
    backgroundImage: img,
  };

  return (
    <div style={style} className={`postcard-container ${direction}`}>
      <h1 className="postcard-text">{text}</h1>
    </div>
  );
}

export default Postcard;
