import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRequest } from '../../store/actions/actionList';
import News from './News'
import Edition from './Edition'
import { ContentWrapper, Content } from './style';

const ListNews = ()=> {
    
    const dispatch = useDispatch(); 
   
    useEffect(()=>{      
         dispatch(listRequest())      
    },[dispatch]);    

    const news = useSelector(state =>{                
      return [...state.list.news]
    });

    const show = useSelector(state =>{                 
      return state.edition.show
    });

    const i = useSelector(state =>{                
      return state.edition.i
    });    
    

    return( 
    <ContentWrapper>   
      {news.map((item, index) => (
        <Content key={item.id} id={index}> 
          {!(show && i===item.id )?(
          <News 
            title={item.titulo}
            content={item.conteudo}
            createdAt={item.publicacao}
            newsId={item.id}
            />
          ):<Edition newsId={item.id} />}                    
        </Content>
      ))} 
    </ContentWrapper>        
  )
}

export default ListNews