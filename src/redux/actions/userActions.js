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
