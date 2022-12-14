import { Box, Button, Collapse, Flex, Text, useDisclosure, Icon, VStack, HStack, Divider, useBreakpointValue, CircularProgress, CircularProgressLabel } from "@chakra-ui/react"
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

export function CollapseLesson({ isOpen = false, onToggle, data }: CollpaseLessonProps) {
    const router = useRouter()
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })
    return (
        <>
            <Box
                w={isWideVersion ? '100%' : '100%'}
                color='white'
                rounded='md'
                shadow='md'
               
            >
                <Flex
                    bg='gray.250'
                    px='40px'
                    flexDir='column'
                    py='4'
                >
                    {
                        isWideVersion &&
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
                    <Flex py='4' justify='space-between'>
                        <Flex align='center' gridGap='6px' >
                            <Text color='white.900' fontWeight='bold' fontSize='lg' >
                                0 de
                            </Text>
                            <Text color='white.200' fontWeight='light' fontSize='md'>
                                {data.map((item) => item.completedLessons)} aulas concluidas

                            </Text>
                        </Flex>
                        <CircularProgress value={40} color='purple.700' trackColor="gray.500" size={['40px', '60px']}>
                            <CircularProgressLabel color='white.900' fontWeight='bold' >40%</CircularProgressLabel>
                        </CircularProgress>
                    </Flex>

                </Flex>
                <VStack 
                spacing='1px' maxH='350px' overflowY='scroll'
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
                                    <a style={{ width: '100%' }}>
                                        <Flex
                                            cursor='pointer'
                                            borderLeftWidth={router.asPath === `/watch/${lesson.id}` ? '2px' : '0'}
                                            borderLeftColor={router.asPath === `/watch/${lesson.id}` ? 'purple.700' : ''}
                                            key={lesson.id}
                                            px='40px'
                                            minH='115px'
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
                                    </a>

                                </Link>

                            ))
                        )
                    }



                </VStack>
                <Card
                    cardTitle="Conquiste seu certificado!"
                    iconCard={TbCertificate}

                    description="Ap??s concluir todas as aulas da Staageclass voc?? receber?? seu certificado de conclus??o."
                />
            </Box>
        </>
    )
}