import { combineReducers } from "redux";
import { reducer } from "./cart/reducer";

export const rootReducer = combineReducers({
  details: reducer,
});
