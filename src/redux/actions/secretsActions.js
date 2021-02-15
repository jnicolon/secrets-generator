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

export function DeleteSecret(id) {
  return (dispatch, getState) => {
    const state = getState();
    const updatedSecrets = state.secrets.secrets.filter(
      (secret) => secret._id !== id
    );
    return axios
      .delete(`http://localhost:5000/secrets/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: actions.GET_SECRETS, payload: updatedSecrets });
      })
      .catch((err) => console.log(err));
  };
}
