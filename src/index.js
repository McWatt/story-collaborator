import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './rootReducer';
import registerServiceWorker from './registerServiceWorker';
import getInitialState from './get-initial-state';

getInitialState.then(initState => {
    let store = createStore(
        todoApp,
        initState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));

    registerServiceWorker();

    console.log('initState', initState);

}, err => {
    console.log('err', err);
});
