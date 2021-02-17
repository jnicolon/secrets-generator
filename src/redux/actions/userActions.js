import axios from "axios";
import * as actions from ".";

export function setCurrentUser(userName, isLoggedIn) {
  return (dispatch) => {
    const user = {
      isLoggedIn: isLoggedIn,
      userName,
    };
    return dispatch({ type: actions.SET_CURRENT_USER, payload: user });
  };
}

export function setSignInModal(status) {
  return (dispatch) => {
    return dispatch({ type: actions.SET_SIGN_IN_MODAL, payload: status });
  };
}

export function signIn(userName) {
  return (dispatch) => {
    return axios
      .get("https://secrets-generator.herokuapp.com/users")
      .then((res) => {
        let filteredUser = res.data.filter(
          (user) => user.userName === userName
        );
        if (filteredUser.length === 0) {
          dispatch({
            type: actions.SIGN_IN_USER,
            payload: {
              userName: "",
              isLoggedIn: false,
              logInError: "User doesn't exist.",
            },
          });
        } else {
          dispatch({
            type: actions.SIGN_IN_USER,
            payload: { userName, isLoggedIn: true },
            logInError: "",
          });
        }
      })
      .catch((err) => console.log(err));
  };
}
