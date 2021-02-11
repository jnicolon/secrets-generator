import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import secretsReducer from "../reducers/secretsReducers";

const rootReducer = combineReducers({
  users: usersReducer,
  secrets: secretsReducer,
});

export default rootReducer;
