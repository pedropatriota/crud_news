export function formRequest(id, titulo, conteudo) {
  return {
    type: "FORM_REQUEST",
    payload: {
      id,
      titulo,
      conteudo,
      publicacao
    }     
  }
}
 
export function formSuccess() {
  return {
    type: "FORM_REQUEST_SUCCESS",    
  }
}

export function formFailure() {
  return {
    type: "FORM_FAILURE",      
  }
}  