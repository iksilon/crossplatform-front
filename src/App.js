import React from 'react';
import './App.css';
import { Header } from './components/header';
import logo from './images/controller-bg.svg';

function App() {


  return (
    <div className="App">
      <Header className="App-header" />
      <img className="App-logo" src={logo} alt={"Logo"}/>
    </div>
  );
}

export default App;
