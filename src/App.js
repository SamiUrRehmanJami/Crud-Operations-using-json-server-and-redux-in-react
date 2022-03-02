import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Adduser from './components/Adduser';
import Updateuser from './components/Updateuser';
import Navbar from './components/Navbar';



export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addUser" component={Adduser} />
          <Route exact path="/updateUser/:id" component={Updateuser} />
        </Switch>

      </div>
    )
  }
}
