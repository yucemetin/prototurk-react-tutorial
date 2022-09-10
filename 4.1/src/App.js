import AddTodo from "./components/AddTodo";
import todoReducer from "./reducer/todoReducer"
import React, { useReducer, useCallback } from "react"
import TodoList from "./components/TodoList";
import { useMemo } from "react";

function App() {
  console.log("App render")
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: {
      id: 1,
      content: '',
    },
    search: ''
  })

  const submitHandle = useCallback(e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TODO',
      todo: state.todo
    })
  }, [state.todo])

  const onChangeHandle = useCallback(e => {
    dispatch({
      type: 'SET_TODO',
      value: e.target.value,
    })

  }, [])

  const deleteHandle = useCallback(todoId => {
    dispatch({
      type: 'DELETE_TODO',
      todos: state.todos.filter(todo => todo.id !== todoId)
    })
  }, [state.todos])

  const searchHandle = e => {
    dispatch({
      type: 'SEARCH_TODO',
      value: e.target.value,
    })
  }

  const filteredTodos = useMemo(() => {
    return state.todos.filter(todo => todo.content.includes(state.search))
  }, [state.todos, state.search])


  return (
    <>
      <AddTodo submitHandle={submitHandle} onChangeHandle={onChangeHandle} todo={state.todo} />
      <hr />
      <input type="text" placeholder="search todo..." value={state.search} onChange={searchHandle} />
      <hr />
      <TodoList todos={filteredTodos} deleteHandle={deleteHandle} />
    </>
  );
}

export default App;
