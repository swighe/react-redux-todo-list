import React from 'react';
import './App.css';
import AllTodos from '../container/AllTodos'
import AddTodo from '../container/AddTodo'
import Footer from './Footer'

const App = () => {
return (
  <div className="App">
    <AddTodo/>
    <AllTodos/>
    <Footer/>
  </div>
);
}

export default App