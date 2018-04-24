import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import storyApp from './rootReducer';
import registerServiceWorker from './registerServiceWorker';
import getInitialState from './get-initial-state';

import createSagaMiddleware from 'redux-saga';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

getInitialState.then(initState => {
    const store = createStore(
        storyApp,
        initState,
        composeEnhancers(
            applyMiddleware(sagaMiddleware)
        ));

    sagaMiddleware.run(rootSagas);

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));

    registerServiceWorker();

    console.log('initState', initState);

}, err => {
    console.log('err', err);
});
