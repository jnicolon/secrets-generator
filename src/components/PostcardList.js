import React from "react";
import Postcard from "./Postcard";

function PostcardList() {
  const txt = `One time, I was looking at my own butt in the mirror and someone came in and I had to pretend I din't like it.`;

  return (
    <ul className="postcard-list-container">
      <li>
        <Postcard direction="postcard-horizontal" text={txt} />
        <Postcard direction="postcard-vertical" text={txt} />
      </li>
    </ul>
  );
}

export default PostcardList;
