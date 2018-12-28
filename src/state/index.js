import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { appReducer } from "./app/reducer";
import { authenticationReducer } from "./authentication/reducer";
import { appMessagesReducer } from "./appMessages/reducer";
import { storiesReducer } from "./stories/reducer";
import { storyListReducer } from "./storyList/reducer";

const storyCollaboratorApp = combineReducers({
  app: appReducer,
  appMessages: appMessagesReducer,
  user: userReducer,
  storiesById: storiesReducer,
  storyList: storyListReducer,
  authentication: authenticationReducer
});

export default storyCollaboratorApp;
