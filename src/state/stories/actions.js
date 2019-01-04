export const STORIES_ADD_STORY = "STORIES_ADD_STORY";
export const STORIES_ADD_STORIES = "STORIES_ADD_STORIES";
export const STORIES_UPDATE_STORY = "STORIES_UPDATE_STORY";
export const STORIES_DELETE_STORY = "STORIES_DELETE_STORY";
export const STORIES_API_CREATE_STORY = "STORIES_API_CREATE_STORY";
// export const STORIES_API_CREATE_STORY_SUCCESS_FAILURE = "STORIES_API_CREATE_STORY_SUCCESS_FAILURE";
export const STORIES_API_UPDATE_STORY = "STORIES_API_UPDATE_STORY";
// export const STORIES_API_UPDATE_STORY_SUCCESS_FAILURE = 'STORIES_API_UPDATE_STORY_SUCCESS_FAILURE';
export const STORIES_API_DELETE_STORY = "STORIES_API_DELETE_STORY";
// export const STORIES_API_DELETE_STORY_SUCCESS_FAILURE = 'STORIES_API_DELETE_STORY_SUCCESS_FAILURE';
export const STORIES_API_GET_STORY_LIST = "STORIES_API_GET_STORY_LIST";
export const STORIES_API_GET_STORY = "STORIES_API_GET_STORY";

export const storiesApiGetStoryList = userId => {
  return {
    type: STORIES_API_GET_STORY_LIST,
    payload: {
      userId
    }
  };
};

export const storiesApiGetStory = storyId => {
  return {
    type: STORIES_API_GET_STORY,
    payload: {
      storyId
    }
  };
};

export const storiesApiCreateStory = data => {
  return {
    type: STORIES_API_CREATE_STORY,
    payload: data
  };
};

export const storiesApiUpdateStory = data => {
  return {
    type: STORIES_API_UPDATE_STORY,
    payload: data
  };
};

export const storiesApiDeleteStory = id => {
  return {
    type: STORIES_API_DELETE_STORY,
    payload: id
  };
};

export const storiesAddStory = (data, id) => {
  return {
    type: STORIES_ADD_STORY,
    payload: {
      [id]: data
    }
  };
};

export const storiesAddStories = stories => {
  return {
    type: STORIES_ADD_STORIES,
    payload: {
      stories
    }
  };
};

export const storiesUpdateStory = (data, id) => {
  return {
    type: STORIES_UPDATE_STORY,
    payload: {
      [id]: data
    }
  };
};

export const storiesDeleteStory = id => {
  return {
    type: STORIES_DELETE_STORY,
    payload: id
  };
};
