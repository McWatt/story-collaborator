import { takeEvery } from "redux-saga/effects";
import { API_CREATE_STORY, API_UPDATE_STORY, API_DELETE_STORY } from "../api";
import { createStory, updateStory, deleteStory } from "./storySagas";
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
  yield takeEvery(API_CREATE_STORY, createStory);
  yield takeEvery(API_UPDATE_STORY, updateStory);
  yield takeEvery(API_DELETE_STORY, deleteStory);
  yield takeEvery(AUTH_LOGIN_REQUEST, loginRequest);
  yield takeEvery(AUTH_LOGOUT_REQUEST, logoutRequest);
  yield takeEvery(AUTH_REGISTRATION_REQUEST, registrationRequest);
}
