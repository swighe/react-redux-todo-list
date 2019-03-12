import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import { todos } from './reducers/todos'
import * as serviceWorker from './serviceWorker'

var store = createStore(todos)
const onClick = (value) => store.dispatch({type: 'ADD_TODO', text: value})
const render = () => {
    ReactDOM.render(<App onClick={onClick} todos={store.getState()}/>, document.getElementById('root'))
}
store.subscribe(render)

render()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
