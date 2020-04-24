import { takeLatest, call, put, all } from "redux-saga/effects";
import api from '../../services/api';
import { listSuccess, listFailure, listDeleteFailure } from "../actions/actionList";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function* listNews() {
  try { 
    const response = yield call(api.get, "crud?sortBy=publicacao&order=desc");
    const[...news] = response.data    

    yield put(listSuccess(news));  
    }    
    catch (err) {
      toast.error('OCORREU UM ERRO, TENTE NOVAMENTE')
      yield put(listFailure(err));      
    }    
  } 

  function* listDelete ({ payload }) {
    const{ index }= payload;
    try {      
      yield call(api.delete, `crud/${index}`);
    } 
    catch (err) {
      toast.error('OCORREU UM ERRO, TENTE NOVAMENTE')
      yield put(listDeleteFailure(err))
    }
  }

 
export default all([
  takeLatest("LIST_REQUEST", listNews),
  takeLatest("LIST_DELETE", listDelete)  
]);
 

