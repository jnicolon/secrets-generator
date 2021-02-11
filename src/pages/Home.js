import React, { useEffect } from "react";
import PostcardList from "../components/PostcardList";
import { useDispatch, useSelector } from "react-redux";
import { GetSecrets } from "../redux/actions/secretsActions";

function Home() {
  const dispatch = useDispatch();
  const secrets = useSelector((state) => state.secrets.secrets);
  console.log(secrets);

  useEffect(() => {
    dispatch(GetSecrets());
  }, [dispatch]);

  return <PostcardList secrets={secrets} />;
}

export default Home;
