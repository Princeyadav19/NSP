import { Box, Button, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text, Wrap, WrapItem, Avatar } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from '../Context/loggedIn';

const User = () => {
    useEffect(() => {
        // fetch('http://localhost:3000/userinfo')
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        //     .catch(error => console.error(error))


    }, [])

    const { email, isLoggedIn } = useContext(AuthContext);
    console.log(email, isLoggedIn);

    // const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState('')
    const [newSubStart, setNewSubStart] = useState(new (Date))
    const [newSubEnd, setNewSubEnd] = useState(new (Date))
    const [lastUpdated, setLastUpdated] = useState(null);


    useEffect(() => {
        const lastUpdatedTime = localStorage.getItem('lastUpdated');
        setLastUpdated(lastUpdatedTime ? new Date(lastUpdatedTime) : null);
    }, []);

    useEffect(() => {
        if (lastUpdated) {
            localStorage.setItem('lastUpdated', lastUpdated.toISOString());
        }
    }, [lastUpdated]);

    console.log(newSubStart, newSubEnd, name, lastUpdated);
    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();



        setIsEditMode(false);
        // Handle form submission logic here
    };

    const userInfo = {
        name: "Prateek Yadav",
        email: "prat@example.com",
        subscriptionStart: new Date("2022-04-01"),
        subscriptionEnd: new Date("2023-03-31"),
    };

    const formatDate = (date) => {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    };

    if (!isLoggedIn) {
        return (
            <Box p={4}>
                <Button mr={4}>Log in</Button>
                <Button colorScheme="linkedin">Sign up</Button>
            </Box>
        );


    }

    return (
        <Box p={4} m={4} w="50%" align="start" justify="center">
            <Card>
                <CardHeader>
                    <Heading size="md">User Profile</Heading>
                </CardHeader>
                <Wrap>
                    <WrapItem>
                        <Avatar size="2xl" name={userInfo.name} src="" />
                    </WrapItem>
                </Wrap>
                <CardBody>
                    {isEditMode ? (
                        <form onSubmit={handleSubmit}>
                            <Stack divider={<StackDivider />} spacing={4}>
                                <Box>
                                    <Text>Name</Text>
                                    <input onChange={(e) => { setName(e.target.value) }} type="text" defaultValue={userInfo.name} />
                                </Box>
                                <Box>
                                    <Text>Email Address</Text>
                                    <input type="email" defaultValue={userInfo.email} />
                                </Box>
                                <Box>
                                    <Text>Subscription Start Date</Text>
                                    <input onChange={(e) => { setNewSubStart(e.target.value) }} type="date" defaultValue={userInfo.subscriptionStart.toISOString().substr(0, 10)} />
                                </Box>
                                <Box>
                                    <Text>Subscription End Date</Text>
                                    <input onChange={(e) => { setNewSubEnd(e.target.value) }} type="date" defaultValue={userInfo.subscriptionEnd.toISOString().substr(0, 10)} />
                                </Box>
                            </Stack>
                            <Button mt={4} type="submit">
                                Save
                            </Button>
                        </form>
                    ) : (
                        <Stack divider={<StackDivider />} spacing={4}>
                            <Box>
                                <Text>Name</Text>
                                <Text>{userInfo.name}</Text>
                            </Box>
                            <Box>
                                <Text>Email Address</Text>
                                <Text>{userInfo.email}</Text>
                            </Box>
                            <Box>
                                <Text>Subscription Period</Text>
                                <Text>
                                    {formatDate(userInfo.subscriptionStart)} - {formatDate(userInfo.subscriptionEnd)}
                                </Text>
                            </Box>
                        </Stack>
                    )}
                    <Button mt={4} onClick={handleEditClick}>
                        {isEditMode ? "Cancel" : "Edit Details"}
                    </Button>
                </CardBody>
            </Card>
        </Box>
    );
};

export default User;


