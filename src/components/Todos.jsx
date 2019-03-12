import React, { PureComponent } from 'react';
import Todo from './Todo'

export default class Todos extends PureComponent {
    renderTodo = (todo) => {
        return (
            <Todo id={todo.id} text={todo.text} isComplete={todo.isComplete}/>
        )
    }

    render = () => {
        return (
        <div>
            <ol>
                {this.props.todos.map(todo => {return <li key={todo.id}>{this.renderTodo(todo)}</li>})}
            </ol>
        </div>
        )
    }
}