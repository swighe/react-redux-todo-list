import React, { PureComponent } from 'react';
import Todo from './Todo'
import _ from 'lodash'

export default class Todos extends PureComponent {
    renderTodo = (todo) => {
        return (
            <Todo id={todo.id} text={todo.text} isComplete={todo.isComplete} onClick={this.props.onToggleTodo}/>
        )
    }

    filterTodo = (todo, visibilityFilter) => {
        console.log("todo:" + todo + ", visibilityFilter:" + visibilityFilter)
        const filterMatchesTodoFilter = (todo, visibilityFilter) => {
            switch (visibilityFilter) {
                case 'COMPLETED':
                    return todo.isComplete === true
                case 'INCOMPLETE':
                    return todo.isComplete === false
                case 'SHOW_ALL':
                default:
                    return true;
            }
        }

        return !_.isNil(visibilityFilter) && filterMatchesTodoFilter(todo, visibilityFilter);
    }

    render = () => {
        console.log("todos:" + this.props.todos)
        return (
        <div>
            <ol>
                {_.filter(this.props.todos, (todo) => this.filterTodo(todo, this.props.visibilityFilter)).map(todo => {return <li key={todo.id}>{this.renderTodo(todo)}</li>})}
            </ol>
        </div>
        )
    }
}