import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MenuItem from "./MenuItem";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MenuItem category="size" />
          <MenuItem category="quantity" />
        </header>
      </div>
    );
  }
}

export default App;
