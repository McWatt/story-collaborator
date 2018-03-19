import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './rootReducer';
import registerServiceWorker from './registerServiceWorker';

const initState = {
    user: {
        name: 'erik.phipps',
        favoriteColor: 'blue',
        createdStories: [1234, 1235, 1236]
    },
    stories: {
        1234: {
            title: 'Vegas 2016',
            content: 'asldf jlsdafj lsdfjls djflk sdjflsk ajflk sjlsk djfsjf ',
        },
        1235: {
            title: 'The desert party yeah',
            content: 'alskfjlds ajflkds jfks lsajfl flsdj flsad lsdjl sjdls ls flsdj lsj flj flj flsaj'
        },
        1236: {
            title: 'That time when so and so did that thing',
            content: 'a asfh gyjy dhfnygjoit ghjopuy bjvbfgb lsaj'
        }
    }
}

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
