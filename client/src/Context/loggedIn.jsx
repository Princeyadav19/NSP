import React, { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [email, setEmail] = useState('prat@example.com')
    useEffect(() => {
        const EmailRegister = async () => {
            try {
                const response = await fetch('/api/register');
                const email = await response.json();
                console.log('response', response);
                console.log('email', email);
                setEmail(email);
                setIsLoggedIn(true);
            } catch (error) {
                console.log('error', error);
            }
        };

        EmailRegister();

    }, [])
    return <AuthContext.Provider value={{ email, isLoggedIn }}>{children}</AuthContext.Provider>
}


export default AuthProvider