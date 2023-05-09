import { combineReducers } from "redux";
import contacts from "./contacts";

// combining reducers, generally if there are lot of reducers we use it
// but it is a good practice
export default combineReducers({
  contacts,
});
