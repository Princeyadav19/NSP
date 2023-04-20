import React, { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [loggedEmail, setLoggedEmail] = useState('')
    useEffect(() => {
        // const EmailRegister = async () => {
        //     try {
        //         const response = await fetch('/api/login');
        //         const email = await response.json();
        //         console.log('response', response);
        //         console.log('email', email);
        //         setEmail(email);
        //         setIsLoggedIn(true);
        //     } catch (error) {
        //         console.log('error', error);
        //     }
        // };

        // EmailRegister();

    }, [])
    return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loggedEmail, setLoggedEmail }}>{children}</AuthContext.Provider>
}


export default AuthProvider