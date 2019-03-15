import React from 'react';
import Todo from './Todo'
import map from 'lodash/map'

const Todos = ({todos, onToggleTodo}) => {
    const renderTodo = (todo) => {
        console.log("renderTodo : " + onToggleTodo)
        return (
           <div>
               <Todo {...todo} onClick={onToggleTodo}/>
           </div>
        )
    }
    console.log("Todos.jsx : props todos : " + todos)
    return (
    <div>
        <ol>
            {map(todos,  todo => {
                    console.log("todos.jsx : each todo : " + todo)
                    return <li key={todo.id}>{renderTodo(todo)}</li>
                }
            )}
        </ol>
    </div>
    )
}

export default Todos
