import React, { Component } from 'react';
import './App.css';
import Column from './components/Column'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bubbleArr: []
    };
  }

  render() {
    return (
      <div>
        <Column />
        <Column />
        <Column />
      </div>
    );
  }
}

export default App;
