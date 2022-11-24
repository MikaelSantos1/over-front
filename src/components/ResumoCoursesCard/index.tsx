import { Flex, GridItem, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface ResumeCoursesCardProps {
    count: string | number
    title: string
    icon: IconType;
}

export function ResumeCoursesCard({ count, title, icon }: ResumeCoursesCardProps) {
    return (
        <GridItem 
        bg='gray.400' 
        w='100%'
        minW='250px'
       
        p='10' 
        gridGap='10px' 
        justifyContent='center' 
        alignItems='center'>
            <Flex gridGap='10px'>
            <Icon 
            as={icon} 
            color='white' w
            ='25px' 
            h='25px' 
            />
            <Text
                fontWeight='bold'
                fontSize='xl'
                as='strong'
                color='white.900'>
                {count}
            </Text>
            <Text
                fontSize='xl'
                color='gray.300'
            >
                {title}
            </Text>
            </Flex>
        </GridItem>
    )
}