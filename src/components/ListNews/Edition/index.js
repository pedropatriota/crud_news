import React from 'react';
import { useDispatch } from 'react-redux';
import { closeEdition, editionRequest } from '../../../store/actions/actionEdition';
import { LeftWrapper, NewsTitle, NewsOptions, NewsContent } from '../News/style';
import { Form, InputContent, InputTitle, InputPublish } from './style'

const Edition = (props)=>{
  const dispatch = useDispatch()
  
  const handleSubmit = (data) => { 
    dispatch(editionRequest(data, props.newsId))
  }

  return(
  <Form onSubmit={handleSubmit}>
    <LeftWrapper>
      <NewsTitle>
        <InputTitle name='titulo' type='text' />
        <InputPublish name='publicacao' value={new Date().toLocaleString()}type='text' disabled/>                            
      </NewsTitle> 

      <NewsOptions>             
        <button bg={'#00f'} type='submit'> enviar </button>
        <button onClick={()=> dispatch(closeEdition(props.newsId))}> voltar </button>                        
      </NewsOptions>
    </LeftWrapper>

    <NewsContent>
      <InputContent multiline name='conteudo' type='textarea'/>              
    </NewsContent>
  </Form>
  )
}

export default Edition;
