import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuItem from "./MenuItem";
import {Provider} from './Provider'
import Store from './Store'

class App extends Component {
  render() {
    return (
      <Provider value={new Store()}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <MenuItem category="size" />
            <MenuItem category="quantity" />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
