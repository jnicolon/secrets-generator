import * as actions from "../actions/.";

const defaultState = {
  currentUser: "",
  isLoggedIn: false,
};

function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.userName,
        isLoggedIn: action.payload.isLoggedIn,
      };
    default:
      return state;
  }
}

export default usersReducer;
