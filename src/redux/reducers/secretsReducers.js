import * as actions from "../actions/index";

const initialState = {
  secrets: [],
  test: "",
};

function secretsReducers(state = initialState, action) {
  switch (action.type) {
    case actions.GET_SECRETS:
      return {
        ...state,
        secrets: action.payload,
      };
    case actions.TEST:
      return {
        ...state,
        test: action.payload,
      };
    default:
      return state;
  }
}

export default secretsReducers;
