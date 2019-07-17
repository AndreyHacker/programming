import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Alo from './al';
import Privet from './Privet';



function App() {
  return (

    <BrowserRouter>
    <ul>
      <li>Яндекс</li>
      <li>Гугл</li>
      <li>Опера</li>
      <li>Эксплорер</li>
    </ul>
    <div className="App">
      <Route component={Alo} path='/al'/>
      <Route component={Privet} path='/Privet' />


    </div>
    </BrowserRouter>
  );
}

export default App;
