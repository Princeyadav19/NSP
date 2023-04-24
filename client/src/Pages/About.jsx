import { Avatar, Box, Heading, Link, Stack, Text } from "@chakra-ui/react";

const developer = [
    {
        name: "Prateek Yadav",
        email: "prateeky477@gmail.com",
        linkedin: "https://www.linkedin.com/in/prateek-yadav-354912215/",
        github: "https://github.com/prateeky477",
        bio:
            "",
        avatar: "",
    },
    {
        name: "Harsh Yadav",
        email: "",
        linkedin: "",
        github: "",
        bio:
            "",
        avatar: "",
    },
    {
        name: "Kanishk Yadav",
        email: "",
        linkedin: "",
        github: "",
        bio:
            "",
        avatar: "",
    },
    {
        name: "Manish Yadav",
        email: "",
        linkedin: "",
        github: "",
        bio:
            "",
        avatar: "",
    },
];

function About() {
    return (
        <>
            {developer.map((dev, index) => (
                <Box p={4} maxW="600px" mx="auto" key={index}>
                    <Stack spacing={4}>
                        <Avatar size="2xl" name={dev.name} src={dev.avatar} />
                        <Heading as="h1" size="xl">
                            {dev.name}
                        </Heading>
                        <Text>{dev.bio}</Text>
                        <Stack spacing={2}>
                            <Link href={`mailto:${dev.email}`}>{dev.email}</Link>
                            <Link href={dev.twitter}>Twitter</Link>
                            <Link href={dev.linkedin}>LinkedIn</Link>
                            <Link href={dev.github}>GitHub</Link>
                        </Stack>
                    </Stack>
                </Box>
            ))}
        </>
    );
}

export default About;
