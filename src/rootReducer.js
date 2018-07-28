import { combineReducers } from "redux";
import { user } from "./components/user";
import { stories } from "./stores/stories";
import { storyListReducer as storyList } from "./components/storyList";

const storyCollaboratorApp = combineReducers({
  user,
  stories,
  storyList
});

export default storyCollaboratorApp;
