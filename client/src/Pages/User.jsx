import { Box, Button, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text, Wrap, WrapItem, Avatar, Input, FormLabel } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from '../Context/loggedIn';
import { Link } from "react-router-dom";

const User = () => {

    const { isLoggedIn, setIsLoggedIn, loggedEmail, setLoggedEmail } = useContext(AuthContext);
    console.log(loggedEmail, isLoggedIn);
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState('prateek')
    const [newSubStart, setNewSubStart] = useState(new Date('2022-05-15'))
    const [newSubEnd, setNewSubEnd] = useState(new Date('2024-05-15'))
    // const [lastUpdated, setLastUpdated] = useState(null);


    const handleSubmitInfo = async (e) => {
        e.preventDefault();
        // 
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
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
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
                                    <Input onChange={(e) => { setName(e.target.value) }} type="text" defaultValue={name} />
                                </Box>
                                <Box>
                                    <FormLabel>Email Address</FormLabel>
                                    <Input type="email" defaultValue={loggedEmail} />
                                </Box>
                                <Box>
                                    <FormLabel>Subscription Start Date</FormLabel>

                                    <Input onChange={(e) => { setNewSubStart(e.target.value) }} type="date" defaultValue={newSubStart.toISOString().substr(0, 10)} />
                                </Box>
                                <Box>

                                    <FormLabel>Subscription End Date</FormLabel>
                                    <Input onChange={(e) => { setNewSubEnd(e.target.value) }} type="date" defaultValue={newSubEnd.toISOString().substr(0, 10)} />
                                </Box>
                            </Stack>
                            <Button mt={4} type="submit" onClick={handleSubmitInfo}>
                                Save
                            </Button>
                        </form>
                    ) : (
                        <Stack divider={<StackDivider />} spacing={4}>
                            <Box>
                                <FormLabel>Name</FormLabel>
                                <Text>{name}</Text>
                            </Box>
                            <Box>
                                <FormLabel>Email Address</FormLabel>
                                <Text>{loggedEmail}</Text>
                            </Box>
                            <Box>
                                <FormLabel>Subscription Period</FormLabel>
                                <Text justifyContent="start">
                                    {formatDate(newSubStart)} - {formatDate(newSubEnd)}
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


