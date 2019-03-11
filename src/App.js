import React, { PureComponent } from 'react';
import './App.css';
class App extends PureComponent {
  render() {
    console.log("props : " + this.props)

    return (
      <div className="App">
        <button onClick={this.props.onClick}>{this.props.value}</button>
      </div>
    );
  }
}

export default App;
