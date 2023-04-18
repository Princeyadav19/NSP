import { Box, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Box bg="gray.800" color="white" h="100vh" py="6" px="3">
      <Stack spacing="3">
        <Link to="/">
          <Text fontSize="lg" fontWeight="bold">
            Home
          </Text>
        </Link>
        <Link to="/chat">
          <Text fontSize="lg" fontWeight="bold">
            Chat
          </Text>
        </Link>
      </Stack>
    </Box>
  );
}

export default Sidebar;
