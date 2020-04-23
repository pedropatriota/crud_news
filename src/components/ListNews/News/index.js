import React from 'react';
import { useDispatch } from 'react-redux';
import { startEdition } from '../../../store/actions/actionEdition';
import { listDelete } from '../../../store/actions/actionList';
import { LeftWrapper, NewsTitle, NewsOptions, NewsContent} from './style';


const News = (props)=>{
  const dispatch = useDispatch()

  return(
  <>
    <LeftWrapper>
      <NewsTitle>
        <h2>{props.title}</h2>
        <p>{props.createdAt}</p>                     
      </NewsTitle> 

      <NewsOptions>             
        <button name='editar' onClick={()=> dispatch(startEdition((props.newsId)))}> editar</button>
        <button name='deletar' onClick={()=> dispatch(listDelete(props.newsId))}> deletar </button>                        
      </NewsOptions>
    </LeftWrapper>

    <NewsContent>
      {props.content}               
    </NewsContent>
  </>
  )
}

export default News;
