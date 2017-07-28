import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './TextBox';
import TextBox from "./TextBox";
import DisplayReverse from "./DisplayReverse";

class App extends Component {
  constructor() {
      super();

      this.state = {
          textBoxValue: "Test"
      };

      this.handleTextBox = this.handleTextBox.bind(this);
  }
  handleTextBox(event) {
        this.setState({textBoxValue: event.target.value});
  }
  render() {
    let textBoxValue = this.state.textBoxValue;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TextBox handleTextBox={this.handleTextBox} textValue={textBoxValue} />
        <DisplayReverse textToReverse={textBoxValue}/>
      </div>
    );
  }
}

export default App;
