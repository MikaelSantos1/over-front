import { Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { CoursesCarousel } from "../CoursesCarousel";

interface CardProps {
    icon?: IconType;
    title?: string;
    cardTitle: string;
    description: string;
    iconCard?: IconType;
}

export function Card({ icon, title, description, cardTitle, iconCard }: CardProps) {
    return (
        <VStack bg='transparent' >
            <Flex w='100%' align='center' gridGap='10px'>
                {
                    icon && <Icon as={icon}
                        w='20px'
                        h='20px'
                        color='white.900'
                        fontWeight='bold'
                    />
                }
                {
                    title &&
                    <Text
                        fontWeight='bold'
                        fontSize={['sm', 'md', 'lg', 'lg', '2xl']}
                        color='white.900'
                    >{title}</Text>
                }

            </Flex>
            <Flex

                bg='gray.400'
                w='100%'
                p='8'
                align='center'
                gridGap='20px'
                as='a'

            >{
                    iconCard && <Icon as={iconCard}
                        w='80px'
                        h='60px'
                        color='white.900'
                        fontWeight='bold'
                    />
                }

                <Flex flexDir='column' >
                    <Text
                        fontSize={['sm', 'md', 'lg', 'lg', '2xl']}
                        fontWeight='bold'

                        color='white.900'
                    >{cardTitle}</Text>
                    <Text
                        fontSize={['xs', 'sm', 'md']}
                        mt='2'
                        opacity='0.8'

                        color='white.900'
                    >{description}</Text>
                </Flex>
            </Flex>

        </VStack>
    )
}