import React, { useState } from 'react';
import { Flex, Box, Text, Heading, Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleGetNews = async () => {
        const key = import.meta.env.VITE_APP_KEY;
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=in&category=${selectedCategory}&apiKey=${key}`
        );
        console.log(response.data);
        navigate('/news', { state: response.data });
    };

    return (
        <Flex direction="column" align="center">
            <Heading mb={4}>Select a category</Heading>
            <Flex direction={['column', 'row']} justify="center" align="center">
                <Box
                    bg={`url(https://img.freepik.com/premium-photo/business-word-stock-market-forex-trading-graph-candlestick-chart-background_54178-3007.jpg)`}
                    backgroundSize='cover'
                    backgroundPosition='center'
                    onClick={() => handleCategorySelect('business')}
                    w={'15rem'}
                    h="10rem"
                    p={4}
                    m={2}
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="2xl"
                    boxShadow="sm"
                    transition="box-shadow 0.1s ease-out"
                    _hover={{ cursor: 'pointer', boxShadow: 'lg' }}
                    _active={{ cursor: 'pointer', boxShadow: '2xl' }}
                >
                    <Text fontSize="xl">Business</Text>
                </Box>

                <Box
                    bg={`url(https://cdn.logojoy.com/wp-content/uploads/2018/05/30153113/16_big2.png)`}
                    onClick={() => handleCategorySelect('entertainment')}
                    backgroundSize='cover'
                    backgroundPosition='center'
                    w={'15rem'}
                    h="10rem"
                    p={4}
                    m={2}
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="2xl"
                    boxShadow="sm"
                    transition="box-shadow 0.1s ease-out"
                    _hover={{ cursor: 'pointer', boxShadow: 'lg' }}
                    _active={{ cursor: 'pointer', boxShadow: '2xl' }}


                >
                    <Text fontSize="xl">Entertainment</Text>
                </Box>
                <Box
                    bg={`url(https://logos.flamingtext.com/Word-Logos/general-design-sketch-name.png)`}
                    onClick={() => handleCategorySelect('general')}
                    backgroundSize='cover'
                    backgroundPosition='center'
                    w={'15rem'}
                    h="10rem"
                    p={4}
                    m={2}
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="2xl"
                    boxShadow="sm"
                    transition="box-shadow 0.1s ease-out"
                    _hover={{ cursor: 'pointer', boxShadow: 'lg' }}
                    _active={{ cursor: 'pointer', boxShadow: '2xl' }}

                >
                    <Text fontSize="xl">General</Text>
                </Box>
                <Box
                    bg={`url(https://logos.flamingtext.com/Word-Logos/health-design-stripes-name.gif)`}
                    onClick={() => handleCategorySelect('health')}
                    backgroundSize='cover'
                    backgroundPosition='center'
                    w={'15rem'}
                    h="10rem"
                    p={4}
                    m={2}
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="2xl"
                    boxShadow="sm"
                    transition="box-shadow 0.1s ease-out"
                    _hover={{ cursor: 'pointer', boxShadow: 'lg' }}
                    _active={{ cursor: 'pointer', boxShadow: '2xl' }}
                >
                    <Text fontSize="xl">Health</Text>
                </Box>
                <Box
                    bg={`url(https://img.freepik.com/free-vector/science-word-style_23-2148542051.jpg)`}
                    onClick={() => handleCategorySelect('science')}
                    backgroundSize='cover'
                    backgroundPosition='center'
                    w={'15rem'}
                    h="10rem"
                    p={4}
                    m={2}
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="2xl"
                    boxShadow="sm"
                    transition="box-shadow 0.1s ease-out"
                    _hover={{ cursor: 'pointer', boxShadow: 'lg' }}
                    _active={{ cursor: 'pointer', boxShadow: '2xl' }}

                >
                    <Text fontSize="xl">Science</Text>
                </Box>
            </Flex>
            <Button
                colorScheme="yellow"
                size="lg"
                m={4}
                disabled={!selectedCategory}
                onClick={handleGetNews}
            >
                Get News
            </Button>
        </Flex>
    );
};

export default Categories;
