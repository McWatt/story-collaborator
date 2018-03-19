import { combineReducers } from 'redux';


const user = (state = 'guest', action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return Object.assign({}, state, {
                name: action.payload
            });
        default:
            return state
    }
}

/*

{
    type: 'ADD_STORY',
    payload: {
        1236: {
            title: 'asdfsadf',
            content: 'aasdfsdf'
        }
    }
}


*/

const stories = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_STORY':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

const storyCollaboratorApp = combineReducers({
    user,
    stories
})

export default storyCollaboratorApp;