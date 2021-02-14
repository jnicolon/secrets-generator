import React from "react";
import Postcard from "./Postcard";

function PostcardList({ secrets }) {
  return (
    <ul className="postcard-list-container">
      {secrets.map((secret) => {
        return (
          <li key={secrets.indexOf(secret)}>
            <Postcard direction="postcard-horizontal" text={secret.secret} />
          </li>
        );
      })}
    </ul>
  );
}

export default PostcardList;
