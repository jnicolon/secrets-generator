import * as actions from ".";
import axios from "axios";

export function GetSecrets() {
  return (dispatch) => {
    return axios
      .get("http://localhost:5000/secrets/")
      .then((res) => {
        let tempSecrets = [...res.data];
        let tempOrderedSecrets = tempSecrets.reverse();

        dispatch({ type: actions.GET_SECRETS, payload: tempOrderedSecrets });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
