import * as actions from "../actions/.";

const defaultState = {
  currentUser: {},
};

function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
}

export default usersReducer;
