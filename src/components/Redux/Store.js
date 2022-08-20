import { legacy_createStore as createStore, applyMiddleware } from "redux";
import StoreReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const Store = createStore(
  StoreReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default Store;
