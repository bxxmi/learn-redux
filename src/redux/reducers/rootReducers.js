import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";
import users from "./users";
import counter from "./counter";
import posts from "./posts";

const reducer = combineReducers({
  todos,
  filter,
  users,
  counter,
  posts,
});

export default reducer;
