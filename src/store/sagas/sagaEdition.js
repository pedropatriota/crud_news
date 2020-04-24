import { takeLatest, call, put, all } from "redux-saga/effects";
import api from '../../services/api';
import { editionSuccess, editionFailure } from "../actions/actionEdition";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

export function* editionNews({ payload }) {
  try {    
    
    const { data, i } = payload
    const { titulo, conteudo, publicacao } = data    
    
    yield call(api.put, `crud/${i}`, {
      titulo,
      conteudo,
      publicacao      
    });
   
    yield put(editionSuccess())  
  }    
    catch (err) {
      toast.error('OCORREU UM ERRO, TENTE NOVAMENTE')
      yield put(editionFailure());
    }    
  } 
  
 
export default all([
  takeLatest("EDITION_REQUEST", editionNews) 
]);
 