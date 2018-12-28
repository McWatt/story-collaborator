import { STORYLIST_ADD_STORY, STORYLIST_REMOVE_STORY } from "./actions";

export const storyListReducer = (state = { ids: [] }, action) => {
  switch (action.type) {
    case STORYLIST_ADD_STORY:
      return Object.assign({}, state, {
        ids: state.ids.concat(action.payload)
      });
    case STORYLIST_REMOVE_STORY:
      return Object.assign({}, state, {
        ids: state.ids.filter(id => action.payload !== id)
      });
    default:
      return state;
  }
};
