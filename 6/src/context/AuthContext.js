import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer"

const Context = createContext()

const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {
        user: localStorage.getItem('user') ? true : false
    })

    const data = {
        ...state,
        dispatch
    }
    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )

}

export const useAuth = () => {
    return useContext(Context)
}

export default Provider