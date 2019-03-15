import React from 'react'
import { connect } from 'react-redux'

const AddTodo = ({dispatch}) => {
    var input

    const setInput = (ref) => {
        input = ref
        return ref
    }

    const onSubmit = (e) => {
        if(e) e.preventDefault();
        dispatch({type: 'ADD_TODO', text: input.value})
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='Enter Todo' ref={setInput} />
                <button>Add Todo</button>
            </form>
        </div>
    )
}


export default connect()(AddTodo)