import React from "react";
import Postcard from "./Postcard";
import { useDispatch } from "react-redux";
import { DeleteSecret } from "../redux/actions/secretsActions";

function PostcardList({ secrets, user }) {
  const dispatch = useDispatch();

  const deleteSecret = (id) => {
    dispatch(DeleteSecret(id));
  };

  return (
    <ul className="postcard-list-container">
      {secrets.map((secret) => {
        //logic to make orientation of postcards random
        let direction = Math.floor(Math.random() * 2);
        let index = secrets.indexOf(secret);
        const getDirection = (direction) => {
          if (direction === 0) {
            return "526/359";
          } else {
            return "359/526";
          }
        };
        //logic to select a random bg image
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
            {user && (
              <div
                onClick={() => {
                  deleteSecret(secret._id);
                }}
                className="postcard-trashcan"
              >
                Delete secret
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default PostcardList;
