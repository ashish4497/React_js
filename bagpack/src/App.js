import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import Items from './Items'

class App extends Component {
  render() {
    return (
      <div>
        <Input/>
        <Items/>
      </div>
    );
  }
}

export default App;
