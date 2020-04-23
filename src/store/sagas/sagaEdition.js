import { takeLatest, call, put, all } from "redux-saga/effects";
import api from '../../services/api';
import { editionSuccess, editionFailure } from "../actions/actionEdition";
 

export function* EditionNews({ payload }) {
  try {    
    
    const { title, content, createdAt} = payload.data 
    const { i } = payload.i   

    yield call(api.put, `crud/${i}`, {
      title, 
      content, 
      createdAt
    });
    
    yield put(editionSuccess())
  }    
    catch (err) {
      yield put(editionFailure());
    }    
  } 
  
 
export default all([
  takeLatest("EDITION_REQUEST", EditionNews) 
]);
 