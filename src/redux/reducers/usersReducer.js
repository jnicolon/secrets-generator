import * as actions from "../actions/.";

const defaultState = {
  currentUser: "",
  isLoggedIn: false,
  signInModal: false,
  logInError: "",
};

function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.userName,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case actions.SET_SIGN_IN_MODAL:
      return {
        ...state,
        signInModal: action.payload,
      };
    case actions.SIGN_IN_USER:
      return {
        ...state,
        currentUser: action.payload.userName,
        isLoggedIn: action.payload.isLoggedIn,
        logInError: action.payload.logInError,
      };
    default:
      return state;
  }
}

export default usersReducer;
