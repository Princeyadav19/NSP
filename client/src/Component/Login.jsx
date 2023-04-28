import React, { useState, useContext } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Box,
  Text
} from "@chakra-ui/react"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/loggedIn';

const Login = () => {

  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      });
      const message = await res.json();

      if (res.status === 422 || res.status === 522 || !message) {
        console.log("error")
      } else {
        console.log(message?.data?.email)
        console.log(auth.isLoggedIn)
        auth.setIsLoggedIn(true)
        auth.setLoggedEmail(message?.data?.email)
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box maxW="500px" mx="auto" mt="8">
      <Text fontSize="4xl" textAlign="center" mb="8">
        Sign in your Account
      </Text>
      <form onSubmit={handlelogin}>
        <Stack spacing="4">
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="yellow">
            Sign In
          </Button>
        </Stack>
      </form>
      <Link to='/register'>
        <Text m={5}>First Time ??? Register</Text>
      </Link>
    </Box>
  )

}

export default Login