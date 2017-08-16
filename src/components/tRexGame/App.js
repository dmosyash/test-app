import React, { Component } from 'react';
import Game from './Game.js';
import './App.css';

export const Simplest = (props) => <Game type="sameAndMany" width={'70%'} />
export const Medium = (props) => <Game type="oneAndOne" width={'70%'} />
export const Toughest = (props) => <Game type="oneAndMany" width={'70%'} />

class TRex extends Component {
  render() {
    return (
      <div className="App">
         <Game type="sameAndMany" width={'70%'} /> 
      </div>
    );
  }
}

export default TRex;
