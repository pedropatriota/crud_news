import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { formRequest } from '../../store/actions/actionForm'
import { Wrapper } from './style'
import api from '../../services/api'

const AddNews = ()=> {
    const[state, setState]= useState({
        titulo:'',
        conteudo:'',
        publicacao: new Date().toLocaleString(),
    })

    const handleChange = (event) => {
        const Values = { ...state };
        Values[event.target.name] = event.target.value;
        setState(Values);        
    }  
      
    // const handleSubmit = async (event)=>{
    //     event.preventDefault()
    //     await api.post('crud', {
    //        titulo: state.titulo,
    //        conteudo: state.conteudo,
    //        publicacao: state.publicacao, 
    //     })
    //     window.location.reload()           
    // }   

    const handleSubmit = (e) =>{
        e.preventDefault()

    }

    return(
        <Wrapper>
            <h2>Adicione sua Notícia</h2>
            <form onSubmit={handleSubmit}>
                <input name='titulo' type='text' placeholder='Título' value={state.titulo} onChange={handleChange}></input>
                <textarea name='conteudo' placeholder='Conteúdo...' value={state.conteudo} onChange={handleChange}></textarea>
                <input name='data' type='text'value={state.publicacao} disabled></input>
                <button type='submit'>ADICIONAR</button>
            </form>
        </Wrapper>
    )
}

export default AddNews