const INITIAL_STATE ={
  data:{}  
}

export default function newsForm(state = INITIAL_STATE, action){
    switch(action.type){
      case 'FORM_REQUEST_SUCCESS':
        return window.location.reload()            
      default:
        return state;
    }
}