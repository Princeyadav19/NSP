import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/register", {
        email: email,
        password: password,
      });
      console.log(response);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <Box maxW="500px" mx="auto" mt="8">
      <Text fontSize="4xl" textAlign="center" mb="8">
        Register
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack spacing="4">
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
          {typeof error === "string" && (
            <Text color="red.500" fontWeight="semibold">
              {error}
            </Text>
          )}
          <Button type="submit" colorScheme="yellow">
            Register
          </Button>
        </Stack>
      </form>
      <Link to='/login'>
        <Text m={5}>Already registered??? Login</Text>
      </Link>
    </Box>
  );
};

export default Register;
