export function formRequest(data) {
  return {
    type: "FORM_REQUEST",
    payload: {     
      data 
    }     
  }
}

export function formRequestSuccess() {
  return {
    type: "FORM_REQUEST_SUCCESS",    
  }
}

export function formFailure() {
  return {
    type: "FORM_FAILURE",      
  }
}  