import * as actions from ".";
import axios from "axios";

export function GetSecrets() {
  return (dispatch) => {
    return axios
      .get("http://localhost:5000/secrets/")
      .then((res) => {
        dispatch({ type: actions.GET_SECRETS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
