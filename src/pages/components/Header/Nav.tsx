import { Box, Flex, ListItem, UnorderedList } from "@chakra-ui/react";

export function Nav(){
    return(
        <Flex as='nav' gridGap='1rem' ml='3rem'>
        <UnorderedList >
            <ListItem
                listStyleType='none'
            >
                <Box
                    as="a"
                    position='relative'
                    _after={{
                        content: "''",
                        position: 'absolute',
                        left: 0,
                        bottom: '-11px',
                        width: '0',
                        height: '2px',
                        background: 'purple.700',
                        transition: 'width .3s',
                    }}
                    _hover={{
                        _after: {
                            width: '24px'
                        },
                        color: 'white.900'
                    }}
                    color='white.200'
                >
                    Link1
                </Box >
            </ListItem>
        </UnorderedList>
        <UnorderedList>
            <ListItem
                listStyleType='none'
            >
                <Box
                    as="a"
                    position='relative'
                    _after={{
                        content: "''",
                        position: 'absolute',
                        left: 0,
                        bottom: '-11px',
                        width: '0',
                        height: '2px',
                        background: 'purple.700',
                        transition: 'width .3s',
                    }}
                    _hover={{
                        _after: {
                            width: '24px'
                        },
                        color: 'white.900'
                    }}
                    color='white.200'
                >
                    Link1
                </Box >
            </ListItem>
        </UnorderedList>
        <UnorderedList>
            <ListItem
                listStyleType='none'
            >
                <Box
                    as="a"
                    position='relative'
                    _after={{
                        content: "''",
                        position: 'absolute',
                        left: 0,
                        bottom: '-11px',
                        width: '0',
                        height: '2px',
                        background: 'purple.700',
                        transition: 'width .3s',
                    }}
                    _hover={{
                        _after: {
                            width: '24px'
                        },
                        color: 'white.900'
                    }}
                    color='white.200'
                >
                    Link1
                </Box >
            </ListItem>
        </UnorderedList>
    </Flex>
    )
}