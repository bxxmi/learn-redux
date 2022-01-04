import { createStore } from "redux";
import todoApp from "./reducers/rootReducers";

const store = createStore(todoApp);

export default store;
