import React from "react";
import Postcard from "./Postcard";

function PostcardList({ secrets }) {
  return (
    <ul className="postcard-list-container">
      {secrets.map((secret) => {
        const img = `url(https://picsum.photos/526/359?random=${
          secrets.indexOf(secret) + 1
        })`;

        return (
          <li key={secrets.indexOf(secret)}>
            <Postcard
              img={img}
              direction="postcard-horizontal"
              text={secret.secret}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default PostcardList;
