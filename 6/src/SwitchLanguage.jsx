import React from 'react'
import { useSite } from "./context"

export default function SwitchLanguage() {
    const { language, dispatch } = useSite()

    const switchLanguage = () => {
        dispatch({
            type: 'TOGGLE_LANGUAGE'
        })
    }
    return (
        <div>
            Mevcut Dil = {language}
            <button onClick={switchLanguage}>Dili Değiştir</button>
        </div>
    )
}
