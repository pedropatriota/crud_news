export function startEdition(i, show) {
  return {
    type: "START_EDITION",
    payload: {        
      i,
      show
    }
  }
}

export function closeEdition(i, show) {
  return {
    type: "CLOSE_EDITION",
    payload: {        
      i,
      show
    }
  }
}

export function editionRequest(data, i) {
  return {
    type: "EDITION_REQUEST",
    payload: {     
      data,
      i
    }     
  }
}

export function editionSuccess() {
  return {
    type: "EDITION_SUCCESS"    
  }
}

export function editionFailure() {
  return {
    type: "EDITION_FAILURE"    
  }
}

