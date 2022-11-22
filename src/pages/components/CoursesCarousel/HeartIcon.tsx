import { Flex, Icon } from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
export function HeartIcon(){
    return(
        <Flex
     
        cursor='pointer'
        _hover={{
            '.heart-white': {
                visibility: 'hidden',
                opacity: 0
            },
            '.heart-red': {
                visibility: 'visible',
                opacity: 1
            },
            '.heart-red:hover': {
                visibility: 'visible',
                opacity: 1,

            }
        }}>
        <Icon
            as={AiOutlineHeart}
            color='white'
            w='40px'
            h='40px'
            className="heart-white"
            position='absolute'
        />
        <Icon as={AiFillHeart}
            color='red'
            w='40px' h='40px'
            className="heart-red"
            opacity='0'
            visibility='hidden'
            transition='all ease-in 0.250s'
        />
    </Flex>
    )
}