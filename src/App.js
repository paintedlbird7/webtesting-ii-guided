import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Players from './players/Players';

class App extends Component {
  state = {
    players: [
      { id: 1, name: 'Sam' },
      { id: 2, name: 'Bilbo' },
      { id: 3, name: 'Frodo' },
    ],
  }

  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <div>
        <button onClick={this.greet}>Greet</button>
        <div>{this.state.greeting}</div>
        </div>
        <Players players={this.state.players} />
        </div>
      );
    }
    greet = () => {
      this.setState({ greeting: 'Hello web Students'})
  }
}

export default App;
