import React, { Component } from 'react';
import Pets from "../Pets/Pets";
import './App.css';
import Owners from '../Owners/Owners';

class App extends Component {
  state = {
    mode: 'pet'
  }

  changeMode = (mode) => {
    this.setState({ mode });
  }

  render() {
    return (
      <div className="App">
        <header>
          Hotel <br />
          <button onClick={() => this.changeMode('pet')}>Dashboard</button>
          <button onClick={() => this.changeMode('owner')}>Manage Owners</button>
        </header>
        {this.state.mode === 'pet' ?
        <Pets />
        :
        <Owners />
        }
      </div>
    );
  }
}

export default App;
