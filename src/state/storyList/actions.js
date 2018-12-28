export const STORYLIST_ADD_STORY = "STORYLIST_ADD_STORY";
export const STORYLIST_REMOVE_STORY = "STORYLIST_REMOVE_STORY";

export const storyListAddStory = id => {
  return {
    type: STORYLIST_ADD_STORY,
    payload: id
  };
};
export const storyListRemoveStory = id => {
  return {
    type: STORYLIST_REMOVE_STORY,
    payload: id
  };
};
