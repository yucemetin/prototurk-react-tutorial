import React, { useReducer } from "react"
import todoReducer from "../reducer/todoReducer"


export default function TodoForm() {
    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        todo: {
            id: 1,
            content: '',
            isActive: false
        }
    })

    const submitHandle = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            todo: state.todo
        })
    }

    const onChangeHandle = e => {
        dispatch({
            type: 'SET_TODO',
            value: e.target.value,
        })

    }

    const deleteHandle = todoId => {
        dispatch({
            type: 'DELETE_TODO',
            todos: state.todos.filter(todo => todo.id !== todoId)
        })
    }

    const updateHandle = todoId => {
        const newTodos = state.todos.map(todo => {
            if (todo.id === todoId) {
                return todo.isActive = true
            }
            return todo
        })
        dispatch({
            type: 'UPDATE_TODO',
            todos: newTodos
        })
    }

    return (
        <>
            <h1>TODO APP</h1>
            <form onSubmit={submitHandle}>
                <input type="text" value={state.todo.content} onChange={onChangeHandle} />
                <button disabled={!state.todo.content} type="submit">Ekle</button>
            </form>

            {state.todos.length === 0 && (
                <h3>Hiç todo yok !!</h3>
            )}
            <ul>
                {state.todos.map(todo => (
                    <li key={todo.id}>{todo.id}   ||
                        {todo.isActive ? <input type="text" value={todo.content} onChange={onChangeHandle} /> : todo.content}
                        <button onClick={() => deleteHandle(todo.id)}>sil</button>
                        <button onClick={() => updateHandle(todo.id)}>güncelle</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
