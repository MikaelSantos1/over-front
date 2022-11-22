import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Avatar,
    Input,
    Box,
    Text,
    Icon,
    Flex,
    Divider,
    VStack,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRef } from 'react'
import { AiOutlineClose, AiOutlineRight } from 'react-icons/ai'
import { DiHtml5, DiReact } from 'react-icons/di'

interface SidebarMenuProps {
    name: string;
    email: string
}

export function SidebarMenu({ email, name }: SidebarMenuProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
        <>

            <Avatar
                cursor='pointer'
                name='Dan Abrahmov'
                src='https://bit.ly/dan-abramov'
                ref={btnRef} onClick={onOpen}
            />

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={['xs', 'sm', 'sm']}
            >
                <DrawerOverlay />
                <DrawerContent
zIndex={40}
                    bgColor='white.900'
                >
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Flex justify='space-between' align='center'>
                            <Text
                                color='black.600'
                                fontSize='2xl'
                            >Minha conta
                            </Text>

                        </Flex>
                    </DrawerHeader>
                    <Divider mt='1rem' />
                    <DrawerBody>
                        <Flex>
                            <Box>
                                <Image src='https://bit.ly/dan-abramov' width={80} height={80} alt='' />
                            </Box>
                            <Flex flexDir='column' pl='2'>
                                <Text
                                    fontWeight='bold'
                                    fontSize='xl'
                                    maxH='24px'
                                >Olá,
                                </Text>

                                <Text
                                    fontWeight='bold'
                                    fontSize='2xl'
                                >
                                    {name}
                                </Text>
                                <Text
                                    fontWeight='semibold'
                                    fontSize='lg'
                                    maxH='24px'
                                >
                                    {email}
                                </Text>
                            </Flex >
                        </Flex>
                        <Divider mt='9' />

                        <Flex
                            mt='6'
                            justify='space-between'
                            align='center'
                            cursor='pointer'
                        >
                            <Flex
                                align='center'
                                gridGap='4'
                            >
                                <Icon
                                    as={DiHtml5}
                                    width={6} height={6}
                                    color='purple.700'
                                />
                                <Text
                                    fontWeight='bold'
                                    fontSize='xl'
                                    _hover={{
                                        color: 'purple.700'
                                    }}
                                >
                                    Item
                                </Text>
                            </Flex>
                            <Icon
                                as={AiOutlineRight}
                                width={5} height={5}
                                color='purple.700'
                            />
                        </Flex>
                        <Flex
                            mt='6'
                            justify='space-between'
                            align='center'
                            cursor='pointer'
                        >
                            <Flex
                                align='center'
                                gridGap='4'
                            >
                                <Icon
                                    as={DiHtml5}
                                    width={6} height={6}
                                    color='purple.700'
                                />
                                <Text
                                    fontWeight='bold'
                                    fontSize='xl'
                                    _hover={{
                                        color: 'purple.700'
                                    }}
                                >
                                    Item
                                </Text>
                            </Flex>
                            <Icon
                                as={AiOutlineRight}
                                width={5} height={5}
                                color='purple.700'
                            />
                        </Flex>
                        <Flex
                            mt='6'
                            justify='space-between'
                            align='center'
                            cursor='pointer'
                        >
                            <Flex
                                align='center'
                                gridGap='4'
                            >
                                <Icon
                                    as={DiHtml5}
                                    width={6} height={6}
                                    color='purple.700'
                                />
                                <Text
                                    fontWeight='bold'
                                    fontSize='xl'
                                    _hover={{
                                        color: 'purple.700'
                                    }}
                                >
                                    Item
                                </Text>
                            </Flex>
                            <Icon
                                as={AiOutlineRight}
                                width={5} height={5}
                                color='purple.700'
                            />
                        </Flex>


                    </DrawerBody>

                    <DrawerFooter>

                        <Button
                            h='60px'
                            w='100%'
                            colorScheme='purple'
                        >
                            Desconectar
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}