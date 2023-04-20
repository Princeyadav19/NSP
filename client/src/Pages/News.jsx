import React, { useState, useEffect, useContext } from 'react';
import {
    SimpleGrid,
    Box,
    Heading,
    Text,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
} from '@chakra-ui/react';
import { useLocation, Link } from 'react-router-dom';

import { AuthContext } from '../Context/loggedIn';

const News = () => {

    const { email, isLoggedIn } = useContext(AuthContext);
    const { state } = useLocation();
    const news = state.articles;

    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr)) ' gap={10} m={10}>
            {news.map((article, index) => (

                article.title &&
                article.description &&
                article.url &&
                article.urlToImage && (
                    <Card key={index} size='sm' colorScheme="telegram" border="1px"
                        borderColor="gray.200"
                        borderRadius="2xl"
                        boxShadow="sm"
                        transition="box-shadow 0.1s ease-out"

                        _hover={{ cursor: 'pointer', boxShadow: '2xl' }} >
                        <Box h='200px' bg={`url(${article.urlToImage})`}
                            backgroundSize='cover'
                            backgroundPosition='center'

                        />
                        <CardHeader>
                            <Heading size='sm' noOfLines={3}>{article.title?.slice(0, 80)}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text decoration="auto" noOfLines={6}>{article.description?.slice(0, 160)}</Text>
                        </CardBody>
                        <CardFooter>
                            <Link to='/news/article'
                                state={{
                                    article: article
                                }
                                }>
                                <Button
                                    colorScheme="linkedin"
                                    isDisabled={!isLoggedIn}
                                >
                                    {isLoggedIn ? 'Read More' : 'Log in to read more'}
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                )
            ))}
        </SimpleGrid>
    );
};

export default News;


