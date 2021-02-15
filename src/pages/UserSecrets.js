import React, { useState, useEffect } from "react";
import PostcardList from "../components/PostcardList";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function UserSecrets() {
  const secrets = useSelector((state) => state.secrets.secrets);
  const userName = useSelector((state) => state.users.currentUser);
  const [userSecrets, setUserSecrets] = useState([]);
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

  useEffect(() => {
    let tempUserSecrets = secrets.filter(
      (secret) => secret.userName === userName
    );
    setUserSecrets(tempUserSecrets);
  }, [secrets, userName]);

  return (
    <>
      {!isLoggedIn && <Redirect to="/" />}
      <PostcardList user={true} secrets={userSecrets} />;
    </>
  );
}

export default UserSecrets;
