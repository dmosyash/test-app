import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Header from './components/dragDrop/Header.js'
import Home from './components/dragDrop/Home.js'
import TRex from './components/tRexGame/App.js'
import Brainwaves from './components/brainwaves/App.js'
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={hashHistory}>
          <Route path='/' component={Container}>
            <IndexRoute component={Home} />
            <Route path='trex' component={TRex} />
             <Route path='brainwaves' component={Brainwaves} /> 
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </div>
    );
  }
}

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)
const Container = (props) => <div>
  <Header />
  {props.children}
</div>

export default App;
