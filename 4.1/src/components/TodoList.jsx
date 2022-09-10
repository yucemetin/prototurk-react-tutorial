import React, { memo } from 'react'

function TodoList({ todos, deleteHandle }) {
    console.log("TodoList render")
    return (
        <div>
            {todos.length === 0 && (
                <h3>Hiç todo yok !!</h3>
            )}
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.id} || {todo.content}
                        <button onClick={() => deleteHandle(todo.id)}>sil</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default memo(TodoList)