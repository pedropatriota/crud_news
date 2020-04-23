import React from 'react';
import { useDispatch } from 'react-redux';
import { closeEdition } from '../../../store/actions/actionEdition';
import { LeftWrapper, NewsTitle, NewsOptions, NewsContent } from '../News/style';
import { Form, InputContent, Input } from './style'

const Edition = (props)=>{
  const dispatch = useDispatch()

  const handleSubmit = (data) => {    
    dispatch(editionRequest((data, props.newsId)))
  }

  return(
  <Form onSubmit={handleSubmit}>
    <LeftWrapper>
      <NewsTitle>
        <Input name='title' type='text' />
        <Input name='createdAt' value={new Date().toLocaleString()}type='text' disabled/>                            
      </NewsTitle> 

      <NewsOptions>             
        <button type='submit'> enviar </button>
        <button onClick={()=> dispatch(closeEdition(props.newsId))}> voltar </button>                        
      </NewsOptions>
    </LeftWrapper>

    <NewsContent>
      <InputContent multiline name='content' type='textarea'/>              
    </NewsContent>
  </Form>
  )
}

export default Edition;
