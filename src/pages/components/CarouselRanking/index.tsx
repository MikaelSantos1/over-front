import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { BsFillPlayFill } from 'react-icons/bs'
import "swiper/css";
import "swiper/css/navigation";

import 'swiper/css/pagination';


import { Box, Divider, Flex, Icon, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import Image from "next/image";

interface CoursesCarouselProps {
    carouselTitle: string;
    icon: IconType
    carouselDescription:string;
}

const data = [{
    title: 'Vencendo o medo de crescer no mercado digital',
    thumabnail: 'https://i.pinimg.com/originals/1c/78/ec/1c78ec948e8f5c64a62edd4a2c2f745f.jpg',

    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi vitae! Pariatur, facilis quaerat optio sequi nostrum veritatis aperiam cum non quisquam dignissimos ut est debitis et rerum doloribus quos!'
},
{
    title: 'Vencendo o medo de crescer no mercado digital',
    thumabnail: 'https://i.pinimg.com/originals/eb/df/eb/ebdfeba3af27a19a30962dfbdb138411.jpg',

    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi vitae! Pariatur, facilis quaerat optio sequi nostrum veritatis aperiam cum non quisquam dignissimos ut est debitis et rerum doloribus quos!'
},



]
export function CarouselRanking({ carouselTitle, icon}: CoursesCarouselProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <VStack
        w='100%'
        h='100%'
            _hover={{
                '.swiper-button-prev': {
                    color: 'white.900',
                    opacity: 1,
                    transition: 'all ease 0.5s'

                },
                '.swiper-button-next': {
                    color: 'white.900',
                    opacity: 1,
                    transition: 'all ease 0.5s'

                }
            }}
            pl={['5','10','12']}
            sx={{

                '.swiper': {
                    width: '100%',
                    height: '100%',

                },
                '.swiper-slide': {
                    width: 'auto'
                },
                '.swiper-pagination': {

                },
                '.swiper-pagination-bullets': {
                    width: 'auto',
                    display: 'flex',
                    alignItems: 'center'
                },
                '.swiper-pagination-bullet': {
                    
                    height: '5px',
                    width: '30px',
                    opacity: '.4',
                    backgroundColor: '#fff',
                    margin: '0 3px',
                    borderRadius: 0,
                    
                },
                '.swiper-pagination-bullet-active': {
                    opacity: 1
                },
                '.swiper-button-next': {
                    color: 'white.900',
                    opacity:0
                },
                '.swiper-button-prev': {
                    color: 'white.900',
                    right:20,
                    opacity: 0,
                },
               

            }}>
            <Flex
            w='100%'
            >
                <Flex w='80%' align='center' gridGap='2' flexWrap='wrap'>
                    <Icon
                        width='32px'
                        height='32px'
                        color='purple.700'
                        as={icon}
                    />
                    <Text
                        color='white.900'
                        fontWeight='bold'
                        fontSize={['md','2xl','3xl']}
                    >{carouselTitle}</Text>
                    <Divider orientation="vertical" height='25px'/>
                   
                </Flex>
                {
                    isWideVersion && <Flex className="paginationTop2"  flexWrap='wrap' w='100%' />
                }
               
            </Flex>

            <Swiper

                spaceBetween={20}
                slidesPerView='auto'
                // breakpoints={{
                //     400: {
                //         slidesPerView: 1,
                //         spaceBetween: 10,
                //     },
                //     640: {
                //         slidesPerView: 2,
                //         spaceBetween: 10,
                //     },
                //     768: {
                //         slidesPerView: 3,
                //         spaceBetween: 10,
                //     },
                //     1440: {
                //         slidesPerView: 4,
                //         spaceBetween: 20,
                //     },
                // }}
                modules={[Pagination, A11y, Navigation]}
                
                navigation
                pagination={{ clickable: true, el: '.paginationTop2' }}
                scrollbar={{ draggable: true }}
            >
                {data.map((item, i) => (
                    <SwiperSlide key={i} >
                        <Flex
                            w='100%'
                            h='100%'
                            position='relative'
                            maxW={['300px','400px']}
                            flexDir='column'
                        >
                            <Flex
                                w='100%'
                                position='relative'
                                h={['400px','570px']}
                                
                                
                              
                                
                            >
                                <Image src={item.thumabnail} fill alt='' objectFit='cover' />
                               
                            </Flex>
                            <VStack align='flex-start'   zIndex={20} position='relative' top='-100px'  >
                               
                               
                                <Text
                                    
                                    fontWeight='bold'
                                    fontSize='xl'
                                    color='white.900'
                                >Lorem ipsum dolor sit amet.</Text>
                                <Text
                             
                                    
                                    color='white.200'
                                    noOfLines={2}
                                >
                                    {item.description}
                                </Text>
                              
                            </VStack>
                        </Flex>
                    </SwiperSlide>
                ))}

            </Swiper>


        </VStack>
    )
}