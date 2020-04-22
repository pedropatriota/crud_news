import { all } from "redux-saga/effects";
import newsForm from "../sagas/sagaForm";
import newsList from "../sagas/sagaList";
 
export default function* rootSaga() {
  return yield all([newsForm, newsList]);
}
