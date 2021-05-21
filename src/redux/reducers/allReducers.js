import { combineReducers } from "redux";
import { appReducer } from "./appReducer";

export const allReducers = combineReducers({
  app: appReducer
})