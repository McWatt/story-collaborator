export const AUTH_LOGIN_REQUEST = "AUTH_LOGIN_REQUEST";
export const AUTH_LOGOUT_REQUEST = "AUTH_LOGOUT_REQUEST";
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS";
export const AUTH_REGISTRATION_REQUEST = "AUTH_REGISTRATION_REQUEST";
export const AUTH_UPDATE_JWT_TOKEN = "AUTH_UPDATE_JWT_TOKEN";
export const AUTH_UPDATE_USER_STATUS = "AUTH_UPDATE_USER_STATUS";

export const authLoginRequest = (email, password, history) => {
  return {
    type: AUTH_LOGIN_REQUEST,
    payload: {
      email,
      password
    },
    history
  };
};

export const authUpdateJwtToken = token => {
  return {
    type: AUTH_UPDATE_JWT_TOKEN,
    payload: {
      jwt: token
    }
  };
};

export const authUpdateUserStatus = status => {
  return {
    type: AUTH_UPDATE_USER_STATUS,
    payload: {
      status: status
    }
  };
};

export const authLogoutRequest = () => {
  return {
    type: AUTH_LOGOUT_REQUEST
  };
};

export const authRegistrationRequest = (email, password, fullName, history) => {
  return {
    type: AUTH_REGISTRATION_REQUEST,
    payload: {
      email,
      password,
      fullName
    },
    history
  };
};
