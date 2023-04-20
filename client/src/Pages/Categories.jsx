import React, { useEffect, useState } from 'react';
import { Flex, Box, Text, Heading, Button } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    const handleCategorySelect = () => {
        if(selectedCategory!=null){
            handleGetNews()
        }
    };
    // useEffect(() => {
    //   console.log(selectedCategory)
    // },[selectedCategory])
    
    const category_data = [
        {
            bg: `https://cdn.logojoy.com/wp-content/uploads/2018/05/30153113/16_big2.png`,
            text: "Entertainment"
        },
        {
            bg: "https://logos.flamingtext.com/Word-Logos/general-design-sketch-name.png",
            text: "General"
        },
        {
            bg: `https://logos.flamingtext.com/Word-Logos/health-design-stripes-name.gif`,
            text: "Health"
        },
        {
            bg: `https://img.freepik.com/free-vector/science-word-style_23-2148542051.jpg`,
            text: "Science"
        },
        {
            bg: `https://img.freepik.com/premium-photo/business-word-stock-market-forex-trading-graph-candlestick-chart-background_54178-3007.jpg`,
            text: "Business"
        },
    ]


    const handleGetNews = async () => {
        console.log("this is ", selectedCategory)
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
                {
                    category_data.map((data, index) => (
                        <Box
                            key={index}
                            bg={`url(${data.bg})`}
                            onClick={() => { setSelectedCategory(String(data.text).toLowerCase()), 
                                setTimeout(() => {
                                    handleCategorySelect()
                                }, 2000)}}
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
                            <Text fontSize="xl">{data.text}</Text>
                        </Box>
                    ))
                }

            </Flex>
        </Flex>
    );
};

export default Categories;
