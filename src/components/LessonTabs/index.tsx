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
        <Tabs zIndex='10' >
            <TabList>

                {
                    !isWideVersion &&
                    <Tab>
                        <Flex alignItems='center' justifyContent='center' gridGap='5px' maxW='1100px' zIndex='10' >
                            <Icon as={MdPlayLesson} color='purple.700' fontSize='xl' />
                            <Text color='white.900' fontWeight='bold' fontSize='xl'>
                                Aulas
                            </Text>
                        </Flex>
                    </Tab>
                }

                <Tab>
                    <Flex alignItems='center' justifyContent='center' gridGap='5px' maxW='1100px' zIndex='10' >
                        <Icon as={MdPlayLesson} color='purple.700' fontSize='xl' />
                        <Text color='white.900' fontWeight='bold' fontSize='xl'>
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
                        <Icon as={MdPlayLesson} color='purple.700' fontSize='xl' />
                        <Text color='white.900' fontWeight='bold' fontSize='xl'>
                            Material complementar
                        </Text>
                    </Flex>
                </Tab>

            </TabList>

            <TabPanels>
            <TabPanel>
            <CollapseLesson
         data={data}
         />
                </TabPanel>

                <TabPanel >
                    <Text
                        pt='5'
                        color='white.200'
                        fontWeight='normal'
                        fontSize='lg'

                    >
                        {lessonDescription}
                    </Text>
                </TabPanel>
                <TabPanel>
                    <ComplementaryMaterial
                        title="aa"
                        url="ads"
                    />
                </TabPanel>

             
            </TabPanels>
        </Tabs>
    )
}