// Stories
export const ADD_STORY = "Stories/ADD_STORY";
export const UPDATE_STORY = "Stories/UPDATE_STORY";
export const DELETE_STORY = "Stories/DELETE_STORY";

// Stories selectors
export const getStory = id => state => state.stories[id];

// Stories action creators
export const addStory = (data, id) => {
  return {
    type: ADD_STORY,
    payload: {
      [id]: data
    }
  };
};

export const updateStory = (data, id) => {
  return {
    type: UPDATE_STORY,
    payload: {
      [id]: data
    }
  };
};

export const deleteStory = id => {
  return {
    type: DELETE_STORY,
    payload: id
  };
};

// Stories reducer
export const stories = (state = {}, action) => {
  switch (action.type) {
    case ADD_STORY:
      return Object.assign({}, state, action.payload);
    case UPDATE_STORY:
      return Object.assign({}, state, action.payload);
    case DELETE_STORY:
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};
