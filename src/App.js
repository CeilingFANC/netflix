import React from 'react';
import './App.css';
import logo from './Netflix-Logo.png';
import MenuContainer from './Component/menuContainer';
function App(props) {

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo " alt="logo" />
      </header>
      <MenuContainer />
    </div>
  );
}

export default App;
