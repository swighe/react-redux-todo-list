const todo = (state = undefined, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: state ? state.length : 0,
                text: action.text,
                isComplete: false
            }
        default:
            return state
    }
}

export const todos = (state = [], action) => {
    console.log("action called : " + action);
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(state, action)
            ]
        default:
            return state
    }
}