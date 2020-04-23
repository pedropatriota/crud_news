import React from 'react';
import { useDispatch } from 'react-redux';
import { formRequest } from '../../store/actions/actionForm';
import { Form, Input } from '@rocketseat/unform';
import { Wrapper } from './style';

const AddNews = ()=> {
    const dispatch = useDispatch()

    function handleSubmit(data) {
        dispatch(formRequest(data));               
      }

    return(
        <Wrapper>
            <h2>Adicione sua Notícia</h2>
            <Form onSubmit={handleSubmit}>
                <Input name='titulo' type='text' placeholder='Título' />
                <Input multiline="true" type='textarea'  name='conteudo'  placeholder='Conteúdo...'/>
                <Input name='publicacao' type='text' value={new Date().toLocaleString()} disabled />
                <button type='submit'>ADICIONAR</button>
            </Form>
        </Wrapper>
    )
}

export default AddNews