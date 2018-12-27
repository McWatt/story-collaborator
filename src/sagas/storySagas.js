import { call, put, select } from "redux-saga/effects";
import {
  addStory as addStoryToStore,
  updateStory as updateStoryInStore,
  deleteStory as deleteStoryFromStore
} from "../stores/stories";
import { addStory, removeStory } from "../components/storyList";
import {
  apiCallToCreateStory,
  apiCallToUpdateStory,
  apiCallToDeleteStory
} from "../api";

const getUserId = state => state.user.id;

export function* createStory(action) {
  try {
    const id = yield select(getUserId);
    const response = yield call(
      apiCallToCreateStory,
      Object.assign(action.payload, { author_id: id })
    );
    yield put(addStoryToStore(response, id));
    yield put(addStory(id));
  } catch (error) {
    yield put({ type: "CREATE_STORY_SUCCESS_FAILURE", error });
  }
}

export function* updateStory(action) {
  try {
    const response = yield call(apiCallToUpdateStory, action.payload);
    yield put(updateStoryInStore(response, action.payload.id));
  } catch (error) {
    yield put({ type: "UPDATE_STORY_SUCCESS_FAILURE", error });
  }
}

export function* deleteStory(action) {
  try {
    yield call(apiCallToDeleteStory, action.payload);
    // must remove story from storyList first, then remove it from the store
    yield put(removeStory(action.payload));
    yield put(deleteStoryFromStore(action.payload));
  } catch (error) {
    yield put({ type: "DELETE_STORY_SUCCESS_FAILURE", error });
  }
}

/*
'CREATE_STORY' action uses api to create the story in the database, and when resolved dispatches the ADD_STORY event
'ADD_STORY': adds the story to the stories store
*/
