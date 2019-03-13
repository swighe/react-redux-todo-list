import React, { PureComponent } from 'react';
import './App.css';
import Todos from './Todos'
import AddTodo from './AddTodo'
import VisibilityFilter from './VisibilityFilter'

class App extends PureComponent {


  render() {
    console.log("props : " + this.props)

    return (
      <div className="App">
        <AddTodo onClick={this.props.onAddTodo}/>
        <Todos todos={this.props.todos} visibilityFilter={this.props.visibilityFilter} onToggleTodo={this.props.onToggleTodo}></Todos>
        <VisibilityFilter onClick={this.props.onSetVisibilityFilter} currentVisibilityFilter={this.props.visibilityFilter}/>
      </div>
    );
  }
}

export default App;
