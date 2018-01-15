import * as React from 'react';
import './App.css';
import Reboot from 'material-ui/Reboot';

const logo = require('../../assets/logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Reboot />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Learn.io</h2>
        </div>
        <div className="App-intro">
          <div>To get started, edit <code>src/App.tsx</code> and save to reload.</div>
          <div>To get started, edit <code>src/App.tsx</code> and save to reload.</div>
        </div>
        <div className="App-second">
          <div>To get started, edit <code>src/App.tsx</code> and save to reload.</div>
          <div>To get started, edit <code>src/App.tsx</code> and save to reload.</div>
        </div>
      </div>
    );
  }
}

export default App;
