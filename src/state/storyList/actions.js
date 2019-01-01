export const STORYLIST_ADD_STORIES = "STORYLIST_ADD_STORIES";
export const STORYLIST_ADD_STORY = "STORYLIST_ADD_STORY";
export const STORYLIST_REMOVE_STORY = "STORYLIST_REMOVE_STORY";

export const storyListAddStories = arrayOfStoryIds => {
  return {
    type: STORYLIST_ADD_STORIES,
    payload: arrayOfStoryIds
  };
};

export const storyListAddStory = storyId => {
  return {
    type: STORYLIST_ADD_STORY,
    payload: storyId
  };
};
export const storyListRemoveStory = storyId => {
  return {
    type: STORYLIST_REMOVE_STORY,
    payload: storyId
  };
};
