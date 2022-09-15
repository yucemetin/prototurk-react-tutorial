export default function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            const user = action.value
            localStorage.setItem('user', user)
            return {
                ...state,
                user
            }

        case 'LOGOUT':
            localStorage.setItem('user', action.value)
            return {
                ...state,
                user: action.value
            }
        default:
            return state
    }
}