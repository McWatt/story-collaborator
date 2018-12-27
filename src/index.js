import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import storyApp from "./state";
import getInitialState from "./get-initial-state";

import createSagaMiddleware from "redux-saga";
import rootSagas from "./sagas/";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const buildStore = initState => {
  const store = createStore(
    storyApp,
    initState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSagas);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

getInitialState.then(
  initState => {
    // console.log('initState', initState);
    buildStore(initState);
  },
  err => {
    if (err === "unauthorized") {
      buildStore({ authentication: { status: "unauthenticated" } });
    }
  }
);
