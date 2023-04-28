import React, { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loggedEmail, setLoggedEmail] = useState('')
    const [newName, setNewName] = useState('')
    const [subSta, setsubSta] = useState((new Date().toISOString().substring(0, 10)))
    const [subEnd, setsubEnd] = useState((new Date().toISOString().substring(0, 10)))

    return <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loggedEmail, setLoggedEmail, subSta, subEnd, setsubSta, setsubEnd, newName, setNewName }}>{children}</AuthContext.Provider>
}


export default AuthProvider