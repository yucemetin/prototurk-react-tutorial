import React from 'react'
import "./App.css"
import { Title } from "./Component"
import "./index.css"
import "./style.scss"
import Tailwind from "./Tailwind"

export default function Style() {
    const className = process.env.NODE_ENV === "production" ? "info production" : "info development"
    return (
        <>
            <div className="container">
                <span>SASS STYLE COMPONENT</span>
            </div>

            <Title>DENEME</Title>
            <Title theme="dark">DENEME</Title>
            <Tailwind />
            <h1>{process.env.REACT_APP_API_URL}</h1>
            <div className={className}>
                <h3>{process.env.NODE_ENV}</h3>
                <img src="/logo512.png" alt="" />
            </div>
        </>

    );
}
