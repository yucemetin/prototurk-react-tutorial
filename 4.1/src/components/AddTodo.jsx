import React, { memo } from 'react'

function AddTodo({ submitHandle, onChangeHandle, todo }) {
    console.log("AddTodo render")
    return (
        <div>
            <h1>TODO APP</h1>
            <form onSubmit={submitHandle}>
                <input type="text" value={todo.content} onChange={onChangeHandle} />
                <button disabled={!todo.content} type="submit">Ekle</button>
            </form>
        </div>
    )
}

export default memo(AddTodo)