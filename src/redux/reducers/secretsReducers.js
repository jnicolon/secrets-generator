import * as actions from "../actions/index";

const initialState = {
  secrets: [],
};

function secretsReducers(state = initialState, action) {
  switch (action.type) {
    case actions.GET_SECRETS:
      return {
        ...state,
        secrets: action.payload,
      };
    default:
      return state;
  }
}

export default secretsReducers;
