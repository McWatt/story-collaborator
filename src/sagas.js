import { takeEvery, call, put, select } from 'redux-saga/effects';
import {
    addStory as addStoryToStore,
    updateStory as updateStoryInStore,
    deleteStory as deleteStoryFromStore,
} from './stores/stories';
import { removeStory } from './components/storyList';
import {
    API_CREATE_STORY,
    apiCallToCreateStory,
    apiCallToUpdateStory,
    API_UPDATE_STORY,
    API_DELETE_STORY,
    apiCallToDeleteStory
} from './api';

const getUserId = (state) => state.user.id;

function* createStory(action) {
    try {
        const id = yield select(getUserId);
        const response = yield call(apiCallToCreateStory, Object.assign(action.payload, { author_id: id }));
        yield put(addStoryToStore(response, id));
    } catch (error) {
        yield put({ type: 'CREATE_STORY_SUCCESS_FAILURE', error });
    }
}

function* updateStory(action) {
    try {
        const response = yield call(apiCallToUpdateStory, action.payload);
        yield put(updateStoryInStore(response, action.payload.id));
    } catch (error) {
        yield put({ type: 'UPDATE_STORY_SUCCESS_FAILURE', error });
    }
}

function* deleteStory(action) {
    try {
        yield call(apiCallToDeleteStory, action.payload);
        yield put(deleteStoryFromStore(action.payload));
        yield put(removeStory(action.payload));
    } catch (error) {
        yield put({ type: 'DELETE_STORY_SUCCESS_FAILURE', error });
    }
}

export default function* rootSaga() {
    yield takeEvery(API_CREATE_STORY, createStory);
    yield takeEvery(API_UPDATE_STORY, updateStory);
    yield takeEvery(API_DELETE_STORY, deleteStory);
}

/*
'CREATE_STORY' action uses api to create the story in the database, and when resolved dispatches the ADD_STORY event
'ADD_STORY': adds the story to the stories store
*/