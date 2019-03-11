import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createStore } from 'redux'
import * as serviceWorker from './serviceWorker'

const counter = (state = 0, action) => {
    console.log("action called : " + action);
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

var store = createStore(counter)
const onClick = () => store.dispatch({type: 'INCREMENT'})
const render = () => ReactDOM.render(<App onClick={onClick} value={store.getState()}/>, document.getElementById('root'))
store.subscribe(render)

render()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
