import { Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { CoursesCarousel } from "../CoursesCarousel";

interface CardProps {
    
    cardTitle: string;

    iconCard?: IconType;
}

export function CardCategory({  cardTitle, iconCard }: CardProps) {
    return (
        <VStack bg='transparent' >
            <Flex w='100%' align='center' gridGap='10px'>


            </Flex>
            <Flex
                px='80px'
                bg='gray.400'
                py='12px'
               
                align='center'
                gridGap='20px'
                as='a'

            >{
                    <Icon as={iconCard}
                        w='30px'
                        h='30px'
                        color='white.900'
                        fontWeight='bold'
                    />
                }


                <Text
                    fontSize={['sm', 'md', 'lg', 'lg', '2xl']}
                    fontWeight='bold'

                    color='white.900'
                >{cardTitle}</Text>

            </Flex>


        </VStack>
    )
}