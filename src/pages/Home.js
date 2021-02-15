import React, { useState, useEffect } from "react";
import PostcardList from "../components/PostcardList";
import { useDispatch, useSelector } from "react-redux";
import { GetSecrets } from "../redux/actions/secretsActions";

function Home() {
  const dispatch = useDispatch();
  const secrets = useSelector((state) => state.secrets.secrets);
  const [orderedSecrets, setOrderedSecrets] = useState([]);

  useEffect(() => {
    dispatch(GetSecrets());
  }, [dispatch]);

  useEffect(() => {
    let tempSecrets = [...secrets];
    let tempOrderedSecrets = tempSecrets.reverse();
    setOrderedSecrets(tempOrderedSecrets);
  }, [secrets]);

  return <PostcardList secrets={orderedSecrets} />;
}

export default Home;
