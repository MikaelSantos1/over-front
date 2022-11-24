import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { BsFillPlayFill } from 'react-icons/bs'
import "swiper/css";


import 'swiper/css/pagination';


import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { Button } from "./Button";
const data = [{
    title: 'Vencendo o medo de crescer no mercado digital',
    thumabnail: 'https://i.redd.it/a9pl1pqkahh51.png',
    author: 'Kaio geglio',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi vitae! Pariatur, facilis quaerat optio sequi nostrum veritatis aperiam cum non quisquam dignissimos ut est debitis et rerum doloribus quos!'
},
{
    title: 'Vencendo o medo de crescer no mercado digital',
    author: 'Kaio geglio',
    thumabnail: 'https://wallpapersmug.com/download/1920x1080/cb6551/shop-spirite-art.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi vitae! Pariatur, facilis quaerat optio sequi nostrum veritatis aperiam cum non quisquam dignissimos ut est debitis et rerum doloribus quos!'

}


]
export function MainCourseCarousel() {
    return (
        <Box  
       overflow='hidden'
        bg='white ' height='50em' sx={{
            '.swiper': {
                width: '100%',
                height: '100%',

            },
            '.swiper-slide': {
                background: 'linear-gradient(0deg,#0f1116 0,transparent 50%),linear-gradient(45.72deg,#0f1116 8.71%,rgba(15,17,22,0) 72.99%)'
            },
            '.swiper-pagination-bullet': {
                height: '10px',
                width: '8rem',
                opacity: '.4',
                backgroundColor: '#fff',
                margin: '0 3px',
                borderRadius: 0,
                transition: 'opacity .3s',
            },
            '.swiper-pagination-bullet-active': {
                opacity: 1
            },
            '.overlay': {
                background: 'linear-gradient(0deg,#0f1116 0,transparent 50%),linear-gradient(45.72deg,#0f1116 8.71%,rgba(15,17,22,0) 72.99%)'
            },
           
        }}>
            <Swiper
                modules={[Pagination, A11y]}
                allowTouchMove={false}
                
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >

                {data.map((item, i) => (
                    <SwiperSlide key={i} >
                        <Flex
                           
                            height='100%'
                            w='100%'
                            backgroundImage={`url(${item.thumabnail})`}
                            backgroundSize='cover'
                            backgroundRepeat={'no-repeat'}

                        >
                            <Flex
                            
                                justify='center'
                                px={['5','10','20']}
                                flexDir='column'
                                height='100%'
                                w='100%'
                                background={'linear-gradient(0deg,#0f1116 0,transparent 50%),linear-gradient(45.72deg,#0f1116 8.71%,rgba(15,17,22,0) 72.99%)'}
                            >


                                <Text
                                    fontSize={['md', 'xl', '2xl']}
                                    color='white.900'>{item.author}</Text>
                                <Text
                                    textAlign='left'
                                    mt='6'
                                    lineHeight='100%'
                                    fontWeight='bold'
                                    color='white.900'
                                    fontSize={['2xl','3xl', '5xl', '6xl']}
                                    maxW={'800px'}
                                >{item.title}
                                </Text>
                                <Text
                                    mt='8'
                                    fontSize={['md','lg', 'xl', 'xl']}
                                    maxW={'600px'}
                                    color='hsla(0,0%,100%,.8)'
                                >
                                    {item.description}
                                </Text>
                                <Flex gap='4' mt='6'>
                                    <Button
                                        bg="white.900"
                                        color='black'
                                        hoverBg='purple.700'
                                        hoverColor='white.900'
                                        borderColor="transparent"
                                    >
                                        Assistir <Icon as={BsFillPlayFill} />
                                    </Button>
                                    <Button

                                    >Mais detalhes</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    </SwiperSlide>
                ))}



            </Swiper>
        </Box>
    )
}