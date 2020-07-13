import { combineReducers } from "redux";
import leads from "./leads";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
import sidebar from "./sidebar";

export default combineReducers({
  leads,
  errors,
  messages,
  auth,
  sidebar,
});
