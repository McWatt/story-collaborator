import { call, put, select } from "redux-saga/effects";
import {
  storiesAddStory,
  storiesUpdateStory,
  storiesDeleteStory,
  storiesAddStories
} from "../state/stories/actions";
import {
  storyListAddStory,
  storyListAddStories,
  storyListRemoveStory
} from "../state/storyList/actions";
import {
  apiCallToCreateStory,
  apiCallToUpdateStory,
  apiCallToDeleteStory,
  apiCallToGetUserStories,
  apiCallToGetStory
} from "../api";
import { userGetId } from "../state/user/selectors";
import { authenticationGetJwt } from "../state/authentication/selectors";

const mapStories = storiesFromApi => {
  return storiesFromApi.reduce((acc, item) => {
    acc[item._id] = {
      title: item.title,
      content: item.content,
      id: item._id,
      description: item.description
    };
    return acc;
  }, {});
};

export function* getStories(action) {
  try {
    const token = yield select(authenticationGetJwt);
    const id = yield select(userGetId);
    const response = yield call(apiCallToGetUserStories, id, token);
    const storiesById = mapStories(response);
    yield put(storiesAddStories(storiesById));
    yield put(storyListAddStories(Object.keys(storiesById)));
  } catch (err) {
    console.log(err);
  }
}

export function* getStory(action) {
  try {
    const token = yield select(authenticationGetJwt);
    const response = yield call(
      apiCallToGetStory,
      action.payload.storyId,
      token
    );
    const storiesById = mapStories([response]);
    yield put(storiesAddStories(storiesById));
    yield put(storyListAddStories(Object.keys(storiesById)));
  } catch (err) {
    console.log(err);
  }
}

export function* createStory(action) {
  try {
    const token = yield select(authenticationGetJwt);
    const id = yield select(userGetId);
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
    const token = yield select(authenticationGetJwt);
    const response = yield call(apiCallToUpdateStory, action.payload, token);
    yield put(storiesUpdateStory(response, action.payload.id));
  } catch (error) {
    yield put({ type: "UPDATE_STORY_SUCCESS_FAILURE", error });
  }
}

export function* deleteStory(action) {
  try {
    const token = yield select(authenticationGetJwt);
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
