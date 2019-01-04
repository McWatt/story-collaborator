// Stories selectors
export const storyGetById = (id, state) => state.storiesById[id];
export const storyGetByIds = (array, state) =>
  array.map(id => storyGetById(id, state));
