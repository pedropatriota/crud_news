import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INITIAL_STATE = { 
  show: false,
  i:'' 
};
 
export default function listEdition(state = INITIAL_STATE, action) {
  switch (action.type) {    
    case 'START_EDITION':      
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
        ...state,
        data: action.payload.data,
        i: action.payload.i
      } 

    case 'EDITION_SUCCESS':        
      return (  
        toast.info('NOTÍCIA ATUALIZADO COM SUCESSO'),     
        setTimeout(()=>{
          window.location.reload()
        },3000)  
      )
              
    default:
      return state;
  }
}
 

