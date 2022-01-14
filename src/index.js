import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import rootReducers from "./redux/reducers/rootReducers";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "react-devtools-extension";
import ReduxThunk from "redux-thunk";

const store = createStore(rootReducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
