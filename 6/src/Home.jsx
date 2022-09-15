import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import { useAuth } from './context'

export default function Home() {
    const { user } = useAuth()
    return (
        <>
            <Header />
            {user && (
                <div style={{ border: "1px solid red", padding: 10 }}>
                    Bu alanı sadece giriş yapanlar görebilir
                </div>
            )}
            <hr />
            <Footer />
        </>
    )
}
