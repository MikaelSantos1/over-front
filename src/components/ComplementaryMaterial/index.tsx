import { Flex, Icon, Text } from "@chakra-ui/react";
import { BsDownload} from 'react-icons/bs'
interface ComplementaryMaterialProps{
    title:string
    url:string;
}
export function ComplementaryMaterial({title,url}:ComplementaryMaterialProps){
    return(
        <Flex 
        h='86px'
        bg='gray.400' 
        w='100%'
       px='5'
        align='center'
        gridGap='20px'
        as='a'
        href={url}
      
        >
            <Icon as={BsDownload}
            w='20px'
            h='20px'
            color='white.900'
            fontWeight='bold'
            />
            <Text
             fontWeight='bold'
             fontSize={['sm', 'md', 'lg', 'lg','2xl']}
             color='white.900'
            >{title}</Text>
        </Flex>
    )
}