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
import { Card } from "../Card";
import { CardCategory } from "./CardCategory";
import { AiOutlineRocket } from "react-icons/ai";



interface CarouselCategoryProps{
    data:{
        categoryName:string;
        categoryIcon:IconType;
    }[]
}


export function CategoryCarousel({data}:CarouselCategoryProps) {
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
                    top:'15px',
                     color: 'white.900',
                    opacity: 0,
                    background: 'linear-gradient(266.88deg,#000 2.46%,transparent 102.12%)',
                    height: '100%',
                    transition: 'all ease-in-out 0.3s'
                },
                '.swiper-button-prev': {
                    left: 0,
                    width: '30px',
                
                    top:'15px',
                    color: 'white.900',
                    opacity: 0,
                    background: 'linear-gradient(180deg,#0b0b0e,transparent)',
                    height: '100%',
                    transition: 'all ease-in-out 0.3s'
                },
                '.swiper-button-disabled': {
                    display: 'none'
                },
                "--swiper-navigation-size": "25px"
            }}>
          
             

         

            <Swiper
                slidesPerView='auto'
              spaceBetween={25}
                modules={[Pagination, A11y, Navigation]}

                navigation
                pagination={{ el: '.paginationTop1', enabled: true, clickable: true }}
                scrollbar={{ draggable: true }}
            >
               {
                data.map((item)=>(
                    <SwiperSlide >
                      <CardCategory
                      cardTitle={item.categoryName}
                      iconCard={item.categoryIcon}
                      />
                 
                    </SwiperSlide>
                ))
               }
                   

            </Swiper>


        </VStack>
    )
}