import React, { Component } from 'react';
import Pets from "../Pets/Pets";
import './App.css';
import Owners from '../Owners/Owners';
import './bootstrap.min.css';

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
          <h1 className="mainHead">Java Pet Hotel</h1>
          <button className="btn btn-info btn-lg" onClick={() => this.changeMode('pet')}>Dashboard</button>
          <button className="btn btn-info btn-lg" onClick={() => this.changeMode('owner')}>Manage Owners</button>
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
