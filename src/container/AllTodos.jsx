import Todos from '../components/Todos'
import _ from 'lodash'
import { connect } from 'react-redux'

const mapStoreToProps = (store) => {
    console.log("AllTodos: mapstatetoprops called with store: " + store.todos)
    return {
        todos: _.filter(store.todos, (todo) => filterTodo(todo, store.visibilityFilter))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: (id) => dispatch({type: 'TOGGLE_TODO', id: id})
    }
}

const filterTodo = (todo, visibilityFilter) => {
    console.log("filter Todo called with : todo:" + todo + ", visibilityFilter:" + visibilityFilter)
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

export default connect(mapStoreToProps, mapDispatchToProps)(Todos)