import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { BsFillPlayFill } from 'react-icons/bs'
import "swiper/css";
import "swiper/css/navigation";

import 'swiper/css/pagination';


import { Box, Divider, Flex, Icon, Progress, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { HeartIcon } from "./heartIcon";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { MdArrowRight } from "react-icons/md";
interface CoursesCarouselProps {
    carouselTitle: string;
    icon: IconType
    carouselDescription?: string;
    data: {
        title: string;
        thumabnail: string;
        description: string
        progress?:number|string
    }[]
    bg?:string;
    p?:string
}


export function CoursesCarousel({ carouselTitle, icon, carouselDescription,bg,  p ,data }: CoursesCarouselProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <VStack
            w='100%'
            h='100%'
            my='20'
            _hover={{
                '.swiper-button-prev': {
                    color: 'white.900',
                    opacity: 1,
                    transition: 'all ease-in 0.3s'

                },
                '.swiper-button-next': {
                    color: 'white.900',
                    opacity: 1,
                    transition: 'all ease-in 0.3s'

                },
               
            }}
            // pl={['5','10','20']}
            sx={{

                '.swiper': {
                    width: '100%',
                    height: '100%',
                    '@media (max-width: 48em)': {
                        '.swiper-slide:first-child': {
                            marginLeft: '10'
                        },

                    },
                    '@media (max-width: 30em)': {
                        '.swiper-slide:first-child': {
                            marginLeft: '5'
                        },

                    }
                },
                '.swiper-slide:first-child': {
                    marginLeft: '12'
                },

                '.swiper-slide': {
                    width: 'auto'
                },
                '.swiper-slide:hover':{
                    '.heart-container':{
                        visibility:'visible',
                         opacity: 1,
                         transition: 'all ease-in 0.3s'
                     }
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
                    right: 0,
                    width: '30px',
                    top: 0,
                    color: 'white.900',
                    opacity: 0,
                    background: 'linear-gradient(266.88deg,#000 2.46%,transparent 102.12%)',
                    height: '100%',
                    transition: 'all ease-in-out 0.3s'
                },
                '.swiper-button-prev': {
                    left: 0,
                    width: '30px',
                    top: 0,
                    color: 'white.900',
                    opacity: 0,
                    background: 'linear-gradient(180deg,#0b0b0e,transparent)',
                    height: '100%',
                    transition: 'all ease-in-out 0.3s'
                },
                '.swiper-button-disabled': {
                    display: 'none'
                }

            }}>
            <Flex
                w='100%'
                pl={['5', '10', '12']}
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
                        fontSize={['md', '2xl', '3xl']}
                    >{carouselTitle}</Text>

                    {
                        carouselDescription &&
                        <Flex gridGap='50px' ml='20px'>
                            <Divider orientation="vertical" height='25px' />
                            <Text color='white.900'
                                fontSize={['12px', 'sm', 'md', 'lg']}
                            >{carouselDescription}</Text>
                        </Flex>
                    }
                    <Flex
                    pl='6' 
                    justify='center'
                    align='center'
                    position='relative'
                    transition='all .4s ease-in'
                    _hover={{
                        '.showAll':{
                        opacity:1
                        },
                        '.iconShow':{
                           left:'calc(100% + 5px) '
                            }
                    }}      
                    >
                        <Icon as={MdArrowRight}
                        width='30px'
                        h='30px'
                        color='white.900' 
                        left={0}
                        className='iconShow'
                        position='absolute'
                        transition='all .4s ease-in'
                        />
                        <Text
                        fontWeight='bold'
                        color='white.900'
                         transition='all .4s ease-in'
                        className="showAll"
                        opacity={0}
                        >Ver tudo</Text>
                    </Flex>
                </Flex>
                {
                    <Flex className="paginationTop1" flexWrap='wrap' w='20%' justify='center' align='center' />
                }

            </Flex>

            <Swiper
                slidesPerView={1}
                breakpoints={{
                    300: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,

                        slidesOffsetBefore: 0
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,

                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination, A11y, Navigation]}

                navigation
                pagination={{ el: '.paginationTop1', enabled: true, clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {data.map((item, i) => (
                    <SwiperSlide key={i} >
                        <Flex
                            w='100%'

                            h='330px'
                            maxW={['95%', '95%', '500px', '500px']}
                            flexDir='column'
                        > 
                            <Flex
                                w='100%'
                                height='100%'
                                position='relative'
                                background={`url(${item.thumabnail}) center center no-repeat`}
                                backgroundSize='cover'

                            >
                                <Box
                                className="heart-container"
                                position='absolute' 
                                right='10px'
                                top='30px' 
                                opacity='0' visibility='hidden'>
                                <HeartIcon/>
                                </Box>
                                {/* <Image src={item.thumabnail} fill alt='' quality={100} objectFit='cover' objectPosition="center" /> */}
                            </Flex>
                            {
                                item.progress &&
                                <Progress
                                zIndex='300'
                                    bg='gray.200'
                                    size='xs'
                                    colorScheme='purple'
                                    value={80}

                                />
                            }
                          
                            <VStack align='flex-start' bg={bg} p={p}>
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