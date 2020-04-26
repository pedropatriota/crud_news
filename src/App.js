import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header'
import AddNews from './components/AddNews';
import ListNews from './components/ListNews';
import GlobalStyle from './style/globalStyle'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ToastContainer autoClose={3000}/>
      <Header />
      <AddNews />
      <ListNews />      
    </Provider>
  );
}

export default App;
