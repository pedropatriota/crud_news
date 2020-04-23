import { startEdition } from "../actions/actionEdition";

const INITIAL_STATE = { 
  show: false,
  i:''
};
 
export default function listNews(state = INITIAL_STATE, action) {
  switch (action.type) {    
    case 'START_EDITION': 
      console.log(action.payload.i)
      return{
        ...state,
        i: action.payload.i,
        show: true
      }    

    case 'CLOSE_EDITION':        
      return {
        ...state,
        i: action.payload.i,
        show: false
      }

    case 'EDITION_REQUEST':        
      return {
        ...startEdition,
        i: action.payload.i
      } 

    case 'EDITION_SUCCESS':        
      return alert('ATUALIZADO COM SUCESSO')      
              
    default:
      return state;
  }
}
 

