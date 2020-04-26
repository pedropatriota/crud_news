import { takeLatest, call, put, all } from "redux-saga/effects";
import api from '../../services/api';
import { formFailure, formRequestSuccess } from "../actions/actionForm";
 

export function* formNews({ payload }) {
  try { 
    
    const{data} = payload
    const { titulo, conteudo } = data    

    yield call(api.post, "crud", {
      titulo,
      conteudo,
      publicacao: new Date().toLocaleString() 
    });
    
    yield put(formRequestSuccess())
  }    
    catch (err) {
      yield put(formFailure());
    }    
  } 
  
 
export default all([
  takeLatest("FORM_REQUEST", formNews) 
]);
 