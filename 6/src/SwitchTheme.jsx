import React from 'react'
import { useSite } from "./context"

export default function SwitchTheme() {
    const { theme, dispatch } = useSite()

    const switchTheme = () => {
        dispatch({
            type: 'TOGGLE_THEME'
        })
    }
    return (
        <div>
            Mevcut Tema = {theme}
            <button onClick={switchTheme}>Tema Değiştir</button>
        </div>
    )
}
