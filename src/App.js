import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx'
import Exterior from './components/Exterior/Exterior.jsx'
import Interior from './components/Interior/Interior.jsx'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' render = {(props) => <Home {...props}/>}/>
        <Route exact path = '/exterior' render = {(props) => <Exterior {...props}/>}/>
        <Route exact path = '/interior' render = {(props) => <Interior {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;
