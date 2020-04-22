import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRequest, listDelete } from '../../store/actions/actionList'
import { TableWrapper } from './style'

const ListNews = ()=> {
    const dispatch = useDispatch(); 
    
    const news = useSelector(state =>{                
        return [...state.list.news]
      }); 

      console.log(news[1])
   
    useEffect(()=>{
        dispatch(listRequest())  
    },[dispatch]);   
    

    return( 
    <TableWrapper>          
        <table>
            <thead>
                <tr>
                    <th>título</th>
                    <th>Conteúdo</th>
                    <th>puplicação</th> 
                    <th>editar</th>
                    <th>deletar</th>

                </tr>
            </thead>            
            <tbody>
                {news.map((item, index) => (
                    <tr key={item.id} data-id={index}>
                        <td>{item.titulo}</td>
                        <td>{item.conteudo}</td>
                        <td>{item.publicacao}</td>
                        <td><button name='editar'>editar</button></td>
                        <td><button name='deletar' onClick={()=> dispatch(listDelete(item.id))}>deletar</button></td>
                    </tr>
                ))}                
            </tbody>
        </table>
    </TableWrapper>        
  )
}

export default ListNews