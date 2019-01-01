import { put, call } from "redux-saga/effects";
import { appMessageUpdate } from "../state/appMessages/actions";
import {
  authUpdateJwtToken,
  authUpdateUserStatus
} from "../state/authentication/actions";
import { userUpdateNameAndEmail } from "../state/user/actions";
import { setJwt, clearJwt } from "../utils/jwt";
import jwt_decode from "jwt-decode";
import { apiCallToAuthenticateUser, apiCallToRegisterUser } from "../api/index";

export function* loginRequest(action) {
  try {
    const json = yield call(apiCallToAuthenticateUser, action.payload);
    const decodedToken = jwt_decode(json.token);

    yield setJwt(json.token);
    yield put(authUpdateJwtToken(json.token));
    yield put(authUpdateUserStatus("authenticated"));
    yield put(
      userUpdateNameAndEmail(
        decodedToken.fullName,
        decodedToken.email,
        decodedToken._id
      )
    );
    yield action.history.push("/");
  } catch (error) {
    yield put(appMessageUpdate("Login failed, please try again"));
  }
}

export function* logoutRequest() {
  yield clearJwt();
  window.location.reload();
}

export function* registrationRequest(action) {
  try {
    yield call(apiCallToRegisterUser, action.payload);
    yield action.history.push("/login");
  } catch (error) {
    yield put(appMessageUpdate("Registration failed, please try again"));
  }
}
