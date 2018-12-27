import { USER_RESET, USER_UPDATE_NAME_AND_EMAIL } from "./actions";

const initState = {
  name: "",
  email: "",
  userId: null
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_UPDATE_NAME_AND_EMAIL:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        userId: action.payload.userId
      };
    case USER_RESET:
      return {
        ...state,
        ...initState
      };
    default:
      return state;
  }
};
