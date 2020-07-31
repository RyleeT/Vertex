import { combineReducers } from "redux";
import leads from "./leads";
import kanban from "./kanban";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import sidebar from "./sidebar";

export default combineReducers({
  leads,
  kanban,
  errors,
  messages,
  auth,
  sidebar,
});
