import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import reducers from "./reducers";
import thunk from "redux-thunk";
import throttle from "lodash.throttle";
import { loadState } from "./components/LocalStorage";
import { saveState } from "./components/LocalStorage";

const persistedState = loadState;

const store = createStore(
  reducers,
  //  persistedState,
  applyMiddleware(thunk)
);

store.subscribe(
  throttle(() => {
    saveState({
      allState: store.getState(),
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
