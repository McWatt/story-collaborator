import {
  AUTH_UPDATE_USER_STATUS,
  AUTH_UPDATE_JWT_TOKEN,
  AUTH_LOGOUT_REQUEST
} from "./actions";

const initState = {
  jwt: "",
  status: "unauthenticated"
};

export const authenticationReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH_UPDATE_USER_STATUS:
      return {
        ...state,
        status: action.payload.status
      };
    case AUTH_UPDATE_JWT_TOKEN:
      return {
        ...state,
        jwt: action.payload.jwt
      };
    case AUTH_LOGOUT_REQUEST:
      return {
        ...state,
        ...initState
      };
    default:
      return state;
  }
};
