import React from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header';
import Main from './components/Main';

library.add(fab, fas, far);




function App() {
  return (
      <>
      <Header /> 
      <Main />
      </>
  );
}

export default App;
