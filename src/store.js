import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import storyApp from "./state/";
import initState from "./get-initial-state";
import rootSagas from "./sagas/";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default state => {
  const store = createStore(
    storyApp,
    initState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSagas);

  return store;
};
