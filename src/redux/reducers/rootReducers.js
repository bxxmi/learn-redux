import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";
import users from "./users";
import counter from "./counter";

const reducer = combineReducers({
  todos,
  filter,
  users,
  counter,
});

export default reducer;
