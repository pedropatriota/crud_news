import { combineReducers } from "redux";
 
import form from "../reducers/reducerForm";
import list from "../reducers/reducerList";
import edition from "../reducers/reducerEdition";
 
export default combineReducers({
  form,
  list,
  edition
});
 
