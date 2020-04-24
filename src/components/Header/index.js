import React from 'react';
import { Header } from './style';
import logo from '../../assets/images/logo_globo.png';

export default function HeaderComponent(){
  return(
    <Header>
      <h2>Repositório de Notícias</h2>
      <p>Grupo Globo</p>
      <img src={logo} alt='logo-rede-globo'/>

    </Header>
  )
}