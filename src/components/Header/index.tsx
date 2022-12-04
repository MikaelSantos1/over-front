import { Avatar, Box, Button, Flex, ListItem, Portal, Text, UnorderedList, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from '../../assets/icons8-duolingo-logo.svg'
import { MenuMobile } from "./MenuMobile";
import { Nav } from "./Nav";
import { SearchBox } from "./SearchBox";
import { SidebarMenu } from "./SidebarMenu";
export function Header() {
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 10) {
                setIsActive(true)
            } else {
                setIsActive(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
    }, [])
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <>
        <Flex

            as='header'
            w='100%'
            bg={isActive ? 'gray.900' : 'transparent'}
            px='3'
            position='fixed'
            left='0'
            right='0'
            zIndex='9999999999999999'
            transition='background-color .5s,top .3s linear'
        >
           
            <Flex
                  
                justify='space-between'
                width='100%'
                p='0 1rem'
            >
                <Flex

                    align='center'
                    w='100%'
                >
                    <Image src={Logo} width={70} height={70} alt='' />
                    <Text fontSize='2xl'>
                        Overstack
                    </Text>
                    {
                        isWideVersion &&  <Nav/>
                    }
                    
                </Flex>
                <Flex
                    justify='flex-end'
                    align='center'
                    w='100%'
                    gridGap='10'
                   
                >
                    <SearchBox  />
                    <SidebarMenu 
                    name="Mikael"
                    email="mikaelsantos120@outlook.com"
                    />
    {
        !isWideVersion && 
        <MenuMobile
        setIsActive={setIsActive}
    />
    }
                    
                </Flex>

            </Flex>
           

        </Flex>
    
       
        </>
    )
}