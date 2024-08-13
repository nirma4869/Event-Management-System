import { AnyAction } from "redux";

import { appReducer } from "./appReducer";
import storage, { KEY_PREFIX } from "./storage";

// ----------------------------------------------------------------------

export const rootPersistConfig = {
  key: "root",
  version: 1,
  storage,
  keyPrefix: KEY_PREFIX,
};

export const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === "RESET") {
    Object.keys(state).forEach((key) => {
      storage.removeItem(`${KEY_PREFIX}${key}`);
    });
    state = undefined;
  }
  return appReducer(state, action);
};
