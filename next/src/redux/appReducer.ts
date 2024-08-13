import { combineReducers } from "redux";
import event from "./slices/event";
import user from "./slices/user";

// ----------------------------------------------------------------------

const appReducer = combineReducers({ event, user });

export { appReducer };
