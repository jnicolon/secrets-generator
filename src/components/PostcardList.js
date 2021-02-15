import React from "react";
import Postcard from "./Postcard";

function PostcardList({ secrets }) {
  return (
    <ul className="postcard-list-container">
      {secrets.map((secret) => {
        let direction = Math.floor(Math.random() * 2);
        let index = secrets.indexOf(secret);
        const getDirection = (direction) => {
          if (direction === 0) {
            return "526/359";
          } else {
            return "359/526";
          }
        };

        const img = `url(https://picsum.photos/${getDirection(
          direction
        )}?random=${index + 1})`;

        return (
          <li key={index}>
            <Postcard
              img={img}
              direction={
                direction === 0 ? "postcard-horizontal" : "postcard-vertical"
              }
              text={secret.secret}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default PostcardList;
