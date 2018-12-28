import {
  STORIES_ADD_STORY,
  STORIES_UPDATE_STORY,
  STORIES_DELETE_STORY
} from "./actions";

export const storiesReducer = (state = {}, action) => {
  switch (action.type) {
    case STORIES_ADD_STORY:
      return Object.assign({}, state, action.payload);
    case STORIES_UPDATE_STORY:
      return Object.assign({}, state, action.payload);
    case STORIES_DELETE_STORY:
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};
