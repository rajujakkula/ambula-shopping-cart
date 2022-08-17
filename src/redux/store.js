import { legacy_createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction"; // import from redux-devtools-extension

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
