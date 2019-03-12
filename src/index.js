import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore, combineReducers } from 'redux'
import { todos } from './reducers/todos'
import { visibilityFilter } from './reducers/visibilityFilter'
import * as serviceWorker from './serviceWorker'

var todoApp = combineReducers({todos, visibilityFilter})
var store = createStore(todoApp)
const onAddTodo = (value) => store.dispatch({type: 'ADD_TODO', text: value})
const onSetVisibilityFilter = (visibilityFilter) => store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: visibilityFilter})
const onToggleTodo = (id) => store.dispatch({type: 'TOGGLE_TODO', id: id})
const render = () => {
    console.log(store.getState())
    ReactDOM.render(
        <App
            onAddTodo={onAddTodo}
            onSetVisibilityFilter={onSetVisibilityFilter}
            todos={store.getState().todos}
            visibilityFilter={store.getState().visibilityFilter}
            onToggleTodo={onToggleTodo}
        />, document.getElementById('root'))
}
store.subscribe(render)

render()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
