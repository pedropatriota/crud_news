import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INITIAL_STATE ={
  data:{}  
}

export default function newsForm(state = INITIAL_STATE, action){
    switch(action.type){
      case 'FORM_REQUEST_SUCCESS':
        return (  
          toast.success('NOTÍCIA ADICIONADA COM SUCESSO'),     
          setTimeout(()=>{
            window.location.reload()
          },3000)  
        )            
      default:
        return state;
    }
}