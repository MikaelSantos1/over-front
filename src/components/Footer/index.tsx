import { Box, Divider, Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer() {
    return (
        <Box w='100%' bg='black.900' >
            <Divider />


            <HStack 
            px={['5', '10', '12']} 
            mt='4' align='flex-start' 
            justify='space-between' 
            flexWrap={['wrap','nowrap','nowrap','nowrap',]} 
            py='12' >
                <VStack color='white.200' align='flex-start' textAlign='left' maxW='190px'>
                    <Text
                        color='white.900'
                        fontWeight='bold'
                        fontSize='2xl'>
                        Overstack
                    </Text>
                    <Text >
                        © Staage.com.br. Todos os direitos reservados</Text>


                </VStack>

                <Flex justify='space-around' w='100%'>
                    <VStack color='white.200' textAlign='left' spacing='15px'>
                        <Text color='white.900' fontWeight='bold' >
                            Navegue
                        </Text>
                        <Text as='a' href="#">
                            Link1</Text>
                        <Text as='a' href="#">Link2</Text>
                        <Text as='a' href="#">Link3</Text>

                    </VStack>
                    <VStack color='white.200' align='flex-start' textAlign='left' spacing='15px'>
                        <Text color='white.900' fontWeight='bold' >
                            Links úteis

                        </Text>
                        <Text as='a' href="#">
                            Link1</Text>
                        <Text as='a' href="#">Link2</Text>
                        <Text as='a' href="#">Link3</Text>

                    </VStack>
                </Flex>
                <Flex justify='space-around' w='100%'>
                    <VStack color='white.200' align='flex-start' textAlign='left' spacing='15px' >
                        <Text color='white.900' fontWeight='bold' >
                            Termos e ajuda
                        </Text>
                        <Text as='a' href="#">
                            Link1</Text>
                        <Text as='a' href="#">Link2</Text>
                        <Text as='a' href="#">Link3</Text>
                    </VStack>

                    <VStack color='white.200' align='flex-start' textAlign='left' spacing='15px' >
                        <Text color='white.900' fontWeight='bold' >
                            Redes sociais
                        </Text>
                        <Flex justify='space-between' align='center' gridGap='15px'>
                            <Icon as={AiFillInstagram} color='white.900' />
                            <Text as='a' href="#">
                                Instagram
                            </Text>
                        </Flex>

                        <Flex justify='space-between' align='center' gridGap='15px'>
                            <Icon as={FaLinkedinIn} color='white.900' />
                            <Text as='a' href="#">
                                Linkedin
                            </Text>
                        </Flex>
                        <Flex justify='space-between' align='center' gridGap='15px'>
                            <Icon as={FaTwitter} color='white.900' />
                            <Text as='a' href="#">
                                Twitter
                            </Text>
                        </Flex>

                        <Flex justify='space-between' align='center' gridGap='15px'>
                            <Icon as={FaYoutube} color='white.900' />
                            <Text as='a' href="#">
                                Youtube
                            </Text>
                        </Flex>
                    </VStack>
                </Flex>
            </HStack>
        </Box>
    )
}