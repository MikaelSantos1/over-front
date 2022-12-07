import { Search2Icon, CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export function SearchBox() {
    const [isOpen, setIsOpen] = useState(false)

    const input1 = useRef(null);
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <>
        {!isWideVersion && 
        
        <FormLabel >
        <Search2Icon
            color='white'
            cursor='pointer'
            visibility={isOpen ? 'hidden' : 'visible'}
            onClick={() => setIsOpen(true)}
        />
    </FormLabel>}
           
            <Flex
                position={!isWideVersion?'absolute':'static'}
                top='70px'
                left='-50px'
                right='0'

                zIndex={9999999999999}  >

                <Flex w={isWideVersion?'':'100%'}
 >

                    <InputGroup
                        opacity={!isOpen ? '0' : 1}
                        display={!isOpen ? 'hidden' : 'visible'}
                        position='relative'
                        transition='all .3s'
                        border='none'
                        transform={!isOpen ? 'translateX(0)' : 'translateX(3.2rem)'}

                    >
                        <Input placeholder='Pesquisar'
                            focusBorderColor="purple.700"
                            id='search'
                            name='search'
                            type='text'
                            ref={input1}
                            bgColor='white.900'
                            maxW={isWideVersion?'300px':'100%'}

                        />

                        <InputRightElement
                            onClick={() => setIsOpen(false)}
                            children={
                                <CloseIcon

                                    cursor='pointer'
                                />} />
                    </InputGroup>

                </Flex>
{
    isWideVersion && 
    <FormLabel >
    <Search2Icon
        color='white'
        cursor='pointer'
        visibility={isOpen ? 'hidden' : 'visible'}
        onClick={() => setIsOpen(true)}
    />
</FormLabel>
}
               



            </Flex>
        </>
    )
}