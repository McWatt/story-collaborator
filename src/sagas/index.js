import { takeEvery } from "redux-saga/effects";
import {
  STORIES_API_CREATE_STORY,
  STORIES_API_UPDATE_STORY,
  STORIES_API_DELETE_STORY,
  STORIES_API_GET_STORY_LIST,
  STORIES_API_GET_STORY
} from "../state/stories/actions";
import {
  createStory,
  updateStory,
  deleteStory,
  getStories,
  getStory
} from "./storySagas";
import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGOUT_REQUEST,
  AUTH_REGISTRATION_REQUEST
} from "../state/authentication/actions";
import {
  loginRequest,
  logoutRequest,
  registrationRequest
} from "./authenticationSagas";

export default function* rootSaga() {
  yield takeEvery(STORIES_API_CREATE_STORY, createStory);
  yield takeEvery(STORIES_API_UPDATE_STORY, updateStory);
  yield takeEvery(STORIES_API_DELETE_STORY, deleteStory);
  yield takeEvery(STORIES_API_GET_STORY, getStory);
  yield takeEvery(STORIES_API_GET_STORY_LIST, getStories);
  yield takeEvery(AUTH_LOGIN_REQUEST, loginRequest);
  yield takeEvery(AUTH_LOGOUT_REQUEST, logoutRequest);
  yield takeEvery(AUTH_REGISTRATION_REQUEST, registrationRequest);
}
