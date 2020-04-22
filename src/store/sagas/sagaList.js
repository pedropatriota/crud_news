import { takeLatest, call, put, all } from "redux-saga/effects";
import api from '../../services/api';
import { listSuccess, listFailure } from "../actions/actionList";
 

export function* listNews() {
  try { 
    const response = yield call(api.get, "crud?sortBy=publicacao&order=desc");
    const[...news] = response.data

    yield put(listSuccess(news));  
    }    
    catch (err) {
      yield put(listFailure());
    }    
  } 

  function* listDelete ({ payload }) {
    const{ index }= payload;
    try {      
      yield call(api.delete, `crud/${index}`);      
    } catch (err) {
      console.log(err)
    }
  }

 
export default all([
  takeLatest("LIST_REQUEST", listNews),
  takeLatest("LIST_DELETE", listDelete)  
]);
 

