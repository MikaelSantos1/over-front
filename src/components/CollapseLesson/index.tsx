import { Box, Button, Collapse, Flex, Text, useDisclosure, Icon, VStack, HStack, Divider, useBreakpointValue } from "@chakra-ui/react"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"
import { AiOutlinePlayCircle, AiFillCheckCircle } from "react-icons/ai"
import { MdArrowForwardIos } from "react-icons/md"
import { TbCertificate } from "react-icons/tb";
import { Card } from "../Card";


interface LessonData {
    chapterTitle: string;
    lessonTotalCount: number;
    completedLessons: number;
    lessons: [{
        id: string | number,
        duration: string,
        title: string,
        completed: boolean
    }]
}
interface CollpaseLessonProps {
    isOpen?: boolean;
    onToggle?: () => void;
    data: LessonData[]
}

export function CollapseLesson({ isOpen=false, onToggle, data }: CollpaseLessonProps) {
    const router = useRouter()
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <>
            <Box
                w={isWideVersion?'30%':'100%'}
                display={isOpen ? 'none' : 'block'}
                transition='all .3s ease-out'
                transform={isOpen ? 'translateX(100%)' : 'translateX(0)'}
                color='white'


                rounded='md'
                shadow='md'

            >
                <Flex
                    bg='gray.250'
                    px='40px'
                    flexDir='column'

                >
                    {
                       !isWideVersion && 
                       <Flex
                       py='6'
                       onClick={onToggle}
                       align='center'
                   >
                       <Icon
                           as={MdArrowForwardIos}
                           color='white.900'
                           w='20px'
                           h='20px' />

                       <Text
                           fontSize='lg'
                           fontWeight='semibold'
                           color='white.200'>
                           Ocultar aulas

                       </Text>

                   </Flex>
                    }
                   
                    <Text color='white.900' fontWeight='bold' fontSize='xl'>Vencendendo medo taltaltall</Text>
                    <Flex align='center' gridGap='6px' py='4'>
                        <Text color='white.900' fontWeight='bold' fontSize='lg' >
                            0 de
                        </Text>
                        <Text color='white.200' fontWeight='light' fontSize='md'>
                            {data.map((item) => item.completedLessons)} aulas concluidas

                        </Text>
                    </Flex>
                </Flex>
                <VStack spacing='1px' maxH='300px' overflowY='scroll'
                    sx={{
                        '::-webkit-scrollbar-track': {
                            backgroundColor: 'black.900',

                        },
                        ' ::-webkit-scrollbar': {
                            width: '12px',
                            background: 'purple.700',


                        },
                        '::-webkit-scrollbar-thumb': {
                            background: 'purple.700',
                            borderRadius: '12px'
                        }
                    }}
                >
                    {
                        data.map((item) =>
                            item.lessons.map((lesson) => (
                                <Link href={`${lesson.id}`} style={{ width: '100%' }}>
                                    <Flex
                                        cursor='pointer'
                                        borderLeftWidth={router.asPath === `/watch/${lesson.id}` ? '2px' : '0'}
                                        borderLeftColor={router.asPath === `/watch/${lesson.id}` ? 'purple.700' : ''}
                                        key={lesson.id}
                                        px='40px'
                                        minH='96px'
                                        bg={router.asPath === `/watch/${lesson.id}` ? 'gray.400' : 'black.900'}
                                        w='100%'
                                        align='center' justify='space-between'
                                        _hover={{
                                            background: 'gray.400'
                                        }}
                                    >


                                        <VStack align='flex-start' spacing={0}>

                                            <Flex align='center' gridGap='5px'>
                                                <Icon as={AiOutlinePlayCircle} />
                                                <Text color='white.900' fontWeight='bold' fontSize='lg' >
                                                    {lesson.title}
                                                </Text>
                                            </Flex>

                                            <Text
                                                pl='22px'
                                                color='white.200'
                                                fontWeight='bold'
                                                fontSize='sm'
                                                textAlign='left'>
                                                {lesson.duration}
                                            </Text>

                                        </VStack>
                                        {
                                            lesson.completed ? <Icon as={AiFillCheckCircle} w='22px' h='22px' />
                                                : <Box bg='gray.250' w='22px' h='22px' borderRadius='50%' />
                                        }




                                    </Flex>
                                    <Divider />
                                </Link>
                            ))
                        )
                    }



                </VStack>
                <Card
                    cardTitle="Conquiste seu certificado!"
                    iconCard={TbCertificate}

                    description="Após concluir todas as aulas da Staageclass você receberá seu certificado de conclusão."
                />
            </Box>
        </>
    )
}