import { combineReducers } from "redux";

import tasksReducer from "./Tasks/tasks.reducer";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; //local storage, can also be used session storage

export const rootReducer = combineReducers({
  tasksData: tasksReducer,
});

const configStorage = {
  key: "root",
  storage,
  Whitelist: ["tasksData"],
};

export default persistReducer(configStorage, rootReducer);
