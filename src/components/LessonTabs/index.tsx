import { Flex, Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { MdPlayLesson } from "react-icons/md";
import { ComplementaryMaterial } from "../ComplementaryMaterial";

export function LessonTabs() {
    return (
        <Tabs>
            <TabList>
                <Tab>
                    <Flex alignItems='center' justifyContent='center' gridGap='5px'>
                    <Icon as={MdPlayLesson} color='purple.700' fontSize='xl'/>
                    <Text color='white.900' fontWeight='bold' fontSize='xl'>
                        Descrição da aula
                        </Text>
                        </Flex>
                </Tab>
                <Tab>Two</Tab>
                
            </TabList>

            <TabPanels>
                <TabPanel>
                <Text color='white.200' fontWeight='normal' fontSize='md'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nam quis debitis earum facere quisquam cupiditate blanditiis ea saepe illum provident porro molestias repudiandae doloribus iste, ipsa nobis velit. A!
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