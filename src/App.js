import React, { Component } from 'react';
import Content from './components/Content/Content';


import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="capa-gradiente"></div>
          <div className="contenido-details">
            <div className="contenido"><Content /></div>
          </div>
        
      </div>
    );
  }
}

export default App;
