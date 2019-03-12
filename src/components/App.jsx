import React, { PureComponent } from 'react';
import './App.css';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends PureComponent {
  render() {
    console.log("props : " + this.props)

    return (
      <div className="App">
        <AddTodo onClick={this.props.onClick}/>
        <Todos todos={this.props.todos}></Todos>
      </div>
    );
  }
}

export default App;
