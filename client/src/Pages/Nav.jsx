import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../Context/loggedIn';

const Nav = () => {
    const { email, isLoggedIn } = useContext(AuthContext);
    console.log(email, isLoggedIn);

    const location = useLocation();

    const [currId, setCurrId] = useState(
        parseInt(localStorage.getItem('selectedTab')) || 0
    )

    useEffect(() => {
        if (location.pathname === '/user') {
            setCurrId(1);
        } else if (location.pathname === '/chat') {
            setCurrId(2);
        } else if (location.pathname === '/about') {
            setCurrId(3);
        }
    }, [location.pathname])

    const handleTabClick = (index) => {
        setCurrId(index)
        localStorage.setItem('selectedTab', index)
    }

    useEffect(() => {
        localStorage.setItem('selectedTab', currId)
    }, [currId])

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.removeItem('selectedTab');
        }
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, [])

    return (
        <div>
            <Tabs
                size='lg'
                variant='line'
                align='center'
                isFitted={true}
                colorScheme='twitter'
                orientation='horizontal'
                index={currId}
            >
                <TabList>
                    <Link to='/' onClick={() => handleTabClick(0)}>
                        <Tab>Home</Tab>
                    </Link>
                    <Link to='/user' onClick={() => handleTabClick(1)}>
                        <Tab>Profile</Tab>
                    </Link>
                    <Link to='/chat' onClick={() => handleTabClick(2)}>
                        <Tab>Chat</Tab>
                    </Link>
                    <Link to='/about' onClick={() => handleTabClick(3)}>
                        <Tab>About US</Tab>
                    </Link>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        {/* <Home /> */}
                    </TabPanel>
                    <TabPanel>
                        {/* <User /> */}
                    </TabPanel>
                    <TabPanel>
                        {/* <Chat /> */}
                    </TabPanel>
                    <TabPanel>
                        {/* <About /> */}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Nav
