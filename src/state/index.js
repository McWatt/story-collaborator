import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { stories } from "../stores/stories";
import { appReducer } from "./app/reducer";
import { authenticationReducer } from "./authentication/reducer";
import { storyListReducer as storyList } from "../components/storyList";
import { appMessagesReducer } from "./appMessages/reducer";

const storyCollaboratorApp = combineReducers({
  app: appReducer,
  appMessages: appMessagesReducer,
  user: userReducer,
  stories,
  storyList,
  authentication: authenticationReducer
});

export default storyCollaboratorApp;
