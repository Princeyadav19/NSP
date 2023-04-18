import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Button, Text, Box } from '@chakra-ui/react';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Context/loggedIn';
import { Image } from '@chakra-ui/react'

const Home = () => {

    const { email, isLoggedIn } = useContext(AuthContext);
    console.log(email, isLoggedIn);

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const key = import.meta.env.VITE_APP_KEY;
            const url =
                'https://newsapi.org/v2/top-headlines?' +
                'sources=techcrunch&' +
                'apiKey=' + `${key}`;
            console.log(key)


            const response = await fetch(url);
            const data = await response.json();
            setNewsData(data.articles);
            console.log(data.articles)
        };
        fetchNews();
    }, []);

    return (
        <>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr)) ' gap={10} m={10}>
                {newsData.map((article, index) => (
                    article.title && article.description && article.url && article.urlToImage && (
                        <Card key={index} size='sm' colorScheme="telegram" >
                            <Box h='200px' bg={`url(${article.urlToImage})`} backgroundSize='cover' backgroundPosition='center' />
                            <CardHeader>
                                <Heading size='sm' noOfLines={3}>{article.title?.slice(0, 80)}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text decoration="auto" noOfLines={6}>{article.description?.slice(0, 160)}</Text>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    colorScheme="linkedin"
                                    as='a'
                                    href={article.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    isDisabled={!isLoggedIn}
                                >
                                    {isLoggedIn ? 'Read More' : 'Log in to read more'}
                                </Button>
                            </CardFooter>
                        </Card>
                    )
                ))}
            </SimpleGrid>
        </>
    );
};

export default Home;
