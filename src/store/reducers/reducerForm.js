const INITIAL_STATE ={
    titulo: '',
    conteudo: '',
    publicacao: new Date().toLocaleString(),
}

const newsForm = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case 'FORM_REQUEST_SUCCESS':
          return {
            id: action.payload.id,
            titulo: action.payload.titulo,
            conteudo: action.payload.conteudo
          }
    }
}