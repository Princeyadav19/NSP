import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';

const Article = () => {
    const location = useLocation();
    const article = location.state?.article;

    if (!article) {
        return <Box textAlign="center">Article not found</Box>;
    }
    return (
        <Box maxW="xl" mx="auto" my={10}>
            <Image src={article.urlToImage} alt={article.title} />
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                </Box>
                <Heading size="lg" my="2">
                    {article.title}
                </Heading>
                <Text>{article.description}</Text>
            </Box>
        </Box>
    );
};

export default Article;
