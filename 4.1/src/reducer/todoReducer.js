function todoReducer(state, action) {
    switch (action.type) {
        case 'SET_TODO':
            return {
                ...state,
                todo: {
                    id: Math.floor(Math.random() * 246848624524),
                    content: action.value
                }
            }

        case 'ADD_TODO':
            return {
                ...state,
                todo: {
                    content: ''
                },
                todos: [
                    ...state.todos,
                    action.todo
                ]
            }

        case 'DELETE_TODO':
            return {
                ...state,
                todos: action.todos
            }

        case 'SEARCH_TODO':
            return {
                ...state,
                search: action.value
            }

        default:
            return state
    }
}

export default todoReducer