import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import GridListExampleComplex from './Moments.js'
import WriteMoment from './WriteMoment.js'

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header title="Moments"/>
          <WriteMoment />
          <GridListExampleComplex />
        </div>
      </MuiThemeProvider>
    );
  }
}

class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <h2>{this.props.title}</h2>
        </div>
    );
  }
}

export default App;
