const todo = (state = undefined, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: state ? state.length : 0,
                text: action.text,
                isComplete: false
            }
        case 'TOGGLE_TODO':
            return {
                id: action.id,
                text: state.text,
                isComplete: !state.isComplete
            }
        default:
            return state
    }
}

export const todos = (state = [], action) => {
    console.log("action called : " + action.type);
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(state, action)
            ]
        case 'TOGGLE_TODO':
            return [
                ...state.slice(0, action.id),
                todo(state[action.id], action),
                ...state.slice(action.id+1)
            ]
        default:
            return state
    }
}