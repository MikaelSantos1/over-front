import { Flex, Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useBreakpointValue } from "@chakra-ui/react";
import { MdPlayLesson } from "react-icons/md";
import { CollapseLesson } from "../CollapseLesson";
import { ComplementaryMaterial } from "../ComplementaryMaterial";
interface LessonTabsProps {
    lessonDescription: string
}

export function LessonTabs({ lessonDescription,data }: LessonTabsProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <Tabs zIndex='10' p='0' colorScheme='purple'>
            <TabList p='0' justifyContent='space-around'>

                {
                    !isWideVersion &&
                    <Tab >
                        <Flex alignItems='center' justifyContent='center' gridGap='5px' maxW='1100px' zIndex='10' >
                            <Icon as={MdPlayLesson} color='purple.700'  fontSize={['sm', 'md', 'lg']} />
                            <Text color='white.900' fontWeight='bold'  fontSize={['sm', 'md', 'lg']}>
                                Aulas
                            </Text>
                        </Flex>
                    </Tab>
                }

                <Tab>
                    <Flex alignItems='center' justifyContent='center' gridGap='5px' maxW='1100px' zIndex='10' >
                        <Icon as={MdPlayLesson} color='purple.700'  fontSize={['sm', 'md', 'lg']} />
                        <Text color='white.900' fontWeight='bold'  fontSize={['sm', 'md', 'lg']}>
                            Descrição da aula
                        </Text>
                    </Flex>
                </Tab>
                <Tab>
                    <Flex
                        alignItems='center'
                        justifyContent='center'
                        gridGap='5px'
                        zIndex='10' >
                        <Icon as={MdPlayLesson} color='purple.700'  fontSize={['sm', 'md', 'lg']} />
                        <Text color='white.900' fontWeight='bold' fontSize={['sm', 'md', 'lg']}>
                            Material complementar
                        </Text>
                    </Flex>
                </Tab>

            </TabList>

            <TabPanels p={0}>
           
                {
                    !isWideVersion && 
                    <TabPanel p={0}>
                    <CollapseLesson
                    data={data}
                    />
                     </TabPanel>
                }
        
               

                <TabPanel p={0} >
                    <Text
                        pt='5'
                        color='white.200'
                        fontWeight='normal'
                        fontSize='lg'

                    >
                        {lessonDescription}
                    </Text>
                </TabPanel>
                <TabPanel p={0}>
                    <ComplementaryMaterial
                        title="aa"
                        url="ads"
                    />
                </TabPanel>

             
            </TabPanels>
        </Tabs>
    )
}