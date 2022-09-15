import React from 'react'
import SwitchTheme from "./SwitchTheme"
import SwitchLanguage from "./SwitchLanguage"
import { useAuth } from './context'


export default function Header() {
    const { user, dispatch } = useAuth()

    const login = () => {
        dispatch({
            type: 'LOGIN',
            value: false
        })
    }

    const logout = () => {
        dispatch({
            type: 'LOGOUT',
            value: true
        })
    }


    return (
        <div>
            Header <br />
            {user && (
                <button onClick={login}>Çıkış Yap</button>
            )
                || (
                    <button onClick={logout}>Giriş Yap</button>
                )}
            <SwitchTheme />
            <SwitchLanguage />
        </div>
    )
}
