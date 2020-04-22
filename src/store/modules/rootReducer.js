import { combineReducers } from "redux";
 
import form from "../reducers/reducerForm";
import list from "../reducers/reducerList";
 
export default combineReducers({
  form,
  list,
});
 
