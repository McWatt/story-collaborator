import { call, put, select } from "redux-saga/effects";
import {
  storiesAddStory,
  storiesUpdateStory,
  storiesDeleteStory
} from "../state/stories/actions";
import {
  storyListAddStory,
  storyListRemoveStory
} from "../state/storyList/actions";
import {
  apiCallToCreateStory,
  apiCallToUpdateStory,
  apiCallToDeleteStory
} from "../api";

const getUserId = state => state.user.id;
const getToken = state => state.authentication.jwt;

export function* createStory(action) {
  try {
    const token = yield select(getToken);
    const id = yield select(getUserId);
    const response = yield call(
      apiCallToCreateStory,
      Object.assign(action.payload, { author_id: id }),
      token
    );
    yield put(storiesAddStory(response, id));
    yield put(storyListAddStory(id));
  } catch (error) {
    yield put({ type: "CREATE_STORY_SUCCESS_FAILURE", error });
  }
}

export function* updateStory(action) {
  try {
    const token = yield select(getToken);
    const response = yield call(apiCallToUpdateStory, action.payload, token);
    yield put(storiesUpdateStory(response, action.payload.id));
  } catch (error) {
    yield put({ type: "UPDATE_STORY_SUCCESS_FAILURE", error });
  }
}

export function* deleteStory(action) {
  try {
    const token = yield select(getToken);
    yield call(apiCallToDeleteStory, action.payload, token);
    // must remove story from storyList first, then remove it from the store
    yield put(storyListRemoveStory(action.payload));
    yield put(storiesDeleteStory(action.payload));
  } catch (error) {
    yield put({ type: "DELETE_STORY_SUCCESS_FAILURE", error });
  }
}

/*
'CREATE_STORY' action uses api to create the story in the database, and when resolved dispatches the ADD_STORY event
'ADD_STORY': adds the story to the stories store
*/
