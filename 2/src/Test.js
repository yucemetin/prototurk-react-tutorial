import React, { useState, useEffect } from 'react'

export default function Test() {

    const [postId, setPostId] = useState(1)
    const [post, setPost] = useState("")

    useEffect(() => {
        console.log("component ilk yüklendiğinde çalışır")
        const inter = setInterval(() => {
            console.log("Interval çalıştı")
        }, 1000)
        return () => {
            console.log("component destroyed")
            clearInterval(inter)
        }
    }, [])
    useEffect(() => {
        console.log("component render oldu!")
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${postId}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [postId])

    return (
        <div>
            <h3>{postId}</h3>
            <button onClick={() => setPostId(postId + 1)}>Arttır</button>
            <button onClick={() => setPostId(postId - 1)}>Azalt</button>
            <hr />
            <div>
                {post && JSON.stringify(post)}
            </div>
        </div>
    )
}
