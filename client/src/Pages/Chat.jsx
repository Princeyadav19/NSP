import React , { useContext } from 'react'
import { AuthContext } from '../Context/loggedIn';

const Chat = () => {
    const { email, isLoggedIn } = useContext(AuthContext);
    console.log(email, isLoggedIn);
    return (
        <div>Chat</div>
    )
}

export default Chat