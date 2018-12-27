import { APP_MESSAGE_UPDATE, APP_MESSAGE_CLEAR } from "./actions";

const initState = {
  message: ""
};

export const appMessagesReducer = (state = initState, action) => {
  switch (action.type) {
    case APP_MESSAGE_UPDATE:
      return {
        ...state,
        message: action.payload.message
      };
    case APP_MESSAGE_CLEAR:
      return {
        ...state,
        message: ""
      };
    default:
      return state;
  }
};
