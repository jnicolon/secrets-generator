import React from "react";
import Postcard from "./Postcard";

function PostcardList({ secrets }) {
  console.log(secrets);

  return (
    <ul className="postcard-list-container">
      {secrets.map((secret) => {
        return (
          <li>
            <Postcard direction="postcard-horizontal" text={secret.secret} />
          </li>
        );
      })}
    </ul>
  );
}

export default PostcardList;
