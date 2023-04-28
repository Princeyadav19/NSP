import { Box, Button, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text, Wrap, WrapItem, Avatar, Input, FormLabel } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from '../Context/loggedIn';
import axios from 'axios';
import { Link } from "react-router-dom";

const User = () => {

    const { isLoggedIn, setIsLoggedIn, loggedEmail, setLoggedEmail, subSta, subEnd, setsubSta, setsubEnd, newName, setNewName } = useContext(AuthContext);
    console.log(loggedEmail, isLoggedIn);
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState('')
    const [newSubStart, setNewSubStart] = useState(new Date().toISOString().substring(0, 10))
    const [newSubEnd, setNewSubEnd] = useState(new Date().toISOString().substring(0, 10))
    console.log(newSubStart, newSubEnd)

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/user", {
                email: loggedEmail,
                name: name,
                subStart: newSubStart,
                subEnd: newSubEnd,
            });
            console.log(response);
            console.log(newSubStart, newSubEnd, name);
        } catch (err) {
            console.log(err?.response?.data);
        }
        setIsEditMode(!isEditMode)
    };

    const handleEditClick = () => {
        setIsEditMode(!isEditMode);
    };


    const formatDate = (date) => {
        return `${date}`;
    };

    if (!isLoggedIn) {
        return (
            <Box p={4} align="center">
                <Link to='/login'>
                    <Button mr={4}>Log in</Button>
                </Link>
                <Link to='/register'>
                    <Button colorScheme="yellow">Sign up</Button>
                </Link>
            </Box>
        );
    };
    return (
        <Box p={4} m={4} w="50%" align="" justify="center">
            <Card>
                <CardHeader>
                    <Heading size="md">User Profile</Heading>
                </CardHeader>
                <Wrap align="" justify="">
                    <WrapItem>
                        <Avatar size="2xl" name={name} src="" />
                    </WrapItem>
                </Wrap>
                <CardBody>
                    {isEditMode ? (
                        <form>
                            <Stack divider={<StackDivider />} spacing={4}>
                                <Box>
                                    <FormLabel>Name</FormLabel>
                                    <Input onChange={(e) => { setNewName(e.target.value) }} type="text" defaultValue={name} />
                                </Box>
                                <Box>
                                    <FormLabel>Email Address</FormLabel>
                                    <Input type="email" defaultValue={loggedEmail} />
                                </Box>
                                <Box>
                                    <FormLabel>Subscription Start Date</FormLabel>
                                    <Input onChange={e => { setsubSta(e.target.value) }} type="date" />
                                </Box>
                                <Box>
                                    <FormLabel>Subscription End Date</FormLabel>
                                    <Input onChange={e => { setsubEnd(e.target.value) }} type="date" />
                                </Box>
                            </Stack>
                            <Button mt={4} type="submit" onClick={handleUpdate}>
                                Save
                            </Button>
                        </form>
                    ) : (
                        <Stack divider={<StackDivider />} spacing={4}>
                            <Box>
                                <FormLabel>Name</FormLabel>
                                <Text>{newName}</Text>
                            </Box>
                            <Box>
                                <FormLabel>Email Address</FormLabel>
                                <Text>{loggedEmail}</Text>
                            </Box>
                            <Box>
                                <FormLabel>Subscription Period</FormLabel>
                                <Text justifyContent="start">
                                    {formatDate(subSta)} - {formatDate(subEnd)}
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


