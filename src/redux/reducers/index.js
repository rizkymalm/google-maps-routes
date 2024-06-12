import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { authReducers } from "./authReducers";
import { userReducers } from "./userReducers";
import { journeyReducers } from "./journeyReducers";

const persistConfig = {
  key: "root",
  storage,
};

const appReducer = combineReducers({
  auth: authReducers,
  user: userReducers,
  journey: journeyReducers,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
