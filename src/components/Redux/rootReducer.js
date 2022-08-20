import { combineReducers } from "redux";
import Reducer from "./AddToCart/Reducer";

const StoreReducer = combineReducers({
  items: Reducer,
});

export default StoreReducer;
