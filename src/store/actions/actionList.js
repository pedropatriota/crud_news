export function listRequest() {
    return {
      type: "LIST_REQUEST",      
    }
  }
   
  export function listSuccess(news) {
    return {
      type: "LIST_REQUEST_SUCCESS",
      payload: [...news]
    }
  }
  
  export function listFailure() {
    return {
      type: "LIST_FAILURE",      
    }
  }  

  export function listDelete(index){
    return{
      type: 'LIST_DELETE',
      payload: {
        index
      }
    }
  }

  export function listDeleteFailure(){
    return{
      type: 'LIST_DELETE_FAILURE'      
    }
  } 

  

 