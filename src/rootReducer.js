import { combineReducers } from 'redux';
import { user } from './components/user';
import { stories } from './components/storyList';

const storyCollaboratorApp = combineReducers({
    user,
    stories
})

export default storyCollaboratorApp;