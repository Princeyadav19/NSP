import React, { useContext } from 'react'
import { AuthContext } from '../Context/loggedIn';
const About = () => {
    const { email, isLoggedIn } = useContext(AuthContext);
    console.log(email, isLoggedIn);
    return (
        <div>About</div>
    )
}

export default About