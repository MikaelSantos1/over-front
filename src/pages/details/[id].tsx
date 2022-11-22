import { Box, Button, CircularProgress, CircularProgressLabel, Flex, Grid, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Button as ButtonComponent } from "../components/MainCourses/Button";
const courseDetails = {
    thumbnail: 'https://i.redd.it/a9pl1pqkahh51.png'
}
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { ResumeCoursesCard } from "../components/ResumoCoursesCard";
import { BiTimeFive } from 'react-icons/bi'
import { FiLayers } from 'react-icons/fi'
import { BsFolderFill } from 'react-icons/bs'
import { TbCertificate } from 'react-icons/tb'
import { AiOutlineStar, AiFillZhihuCircle } from 'react-icons/ai'
import { LessonCard } from "../components/LessonCard";
import { ComplementaryMaterial } from "../components/ComplementaryMaterial";
import { Tags } from "../components/Tags";
import { Card } from "../components/Card";
import { CoursesCarousel } from "../components/CoursesCarousel";
const courseData = [{
    title: 'Como escalar negócios com marketing de influência',
    about: 'Sendo um dos que está cada vez mais presente na lista de favoritos das pessoas, os ebooks tem se tornado uma forma rápida e prática de consumir conteúdo. Nessa staageclass Mieko Myashiro, ilustradora do Grupo Primo irá te ensinar a como criar seu primeiro ebook do zero mesmo que você não tenha nenhum conhecimento sobre design.',
    lessons: [{
        lessonTitle: 'O que vamos aprender aqui',
        lessonDescription: 'Nessa aula, você terá um panorama de tudo que aprenderá dentro dessa staageclass para que ao final da jornada você já tenha seu primeiro ebook e também saiba como aplicar todo esse conhecimento e se aventurar nesse universo.',
        thumbnail: 'https://i.pinimg.com/564x/5c/db/09/5cdb09c55bceddbe99670372780546ae.jpg',
        duration: '14:00',
        lessonNumber: 'Aula 1',
    },
    {
        lessonTitle: 'O que vamos aprender aqui',
        lessonDescription: 'Nessa aula, você terá um panorama de tudo que aprenderá dentro dessa staageclass para que ao final da jornada você já tenha seu primeiro ebook e também saiba como aplicar todo esse conhecimento e se aventurar nesse universo.',
        thumbnail: 'https://i.pinimg.com/564x/5c/db/09/5cdb09c55bceddbe99670372780546ae.jpg',
        duration: '14:00',
        lessonNumber: 'Aula 1',
    },
    {
        lessonTitle: 'O que vamos aprender aqui',
        lessonDescription: 'Nessa aula, você terá um panorama de tudo que aprenderá dentro dessa staageclass para que ao final da jornada você já tenha seu primeiro ebook e também saiba como aplicar todo esse conhecimento e se aventurar nesse universo.',
        thumbnail: 'https://i.pinimg.com/564x/5c/db/09/5cdb09c55bceddbe99670372780546ae.jpg',
        duration: '14:00',
        lessonNumber: 'Aula 1',
    },
    {
        lessonTitle: 'O que vamos aprender aqui',
        lessonDescription: 'Nessa aula, você terá um panorama de tudo que aprenderá dentro dessa staageclass para que ao final da jornada você já tenha seu primeiro ebook e também saiba como aplicar todo esse conhecimento e se aventurar nesse universo.',
        thumbnail: 'https://i.pinimg.com/564x/5c/db/09/5cdb09c55bceddbe99670372780546ae.jpg',
        duration: '14:00',
        lessonNumber: 'Aula 1',
    },
    {
        lessonTitle: 'O que vamos aprender aqui',
        lessonDescription: 'Nessa aula, você terá um panorama de tudo que aprenderá dentro dessa staageclass para que ao final da jornada você já tenha seu primeiro ebook e também saiba como aplicar todo esse conhecimento e se aventurar nesse universo.',
        thumbnail: 'https://i.pinimg.com/564x/5c/db/09/5cdb09c55bceddbe99670372780546ae.jpg',
        duration: '14:00',
        lessonNumber: 'Aula 1',
    },

    ],
    materials: [{
        title: 'TITULO DO MATEIRAL',
        url: '#'
    },
    {
        title: 'TITULO DO MATEIRAL2',
        url: '#'
    },
    {
        title: 'TITULO DO MATEIRAL3',
        url: '#'
    },
    {
        title: 'TITULO DO MATEIRAL4',
        url: '#'
    },



    ],
    sugestions: [{

        carouselTitle: "Sugestões Overstack",
        icon: AiFillZhihuCircle,
        data: [{
            title: 'Vencendo o medo de crescer no mercado digital',
            thumabnail: 'https://i.pinimg.com/originals/43/aa/60/43aa605fbc768e5907c1f5a9ab341b92.jpg',

            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi vitae! Pariatur, facilis quaerat optio sequi nostrum veritatis aperiam cum non quisquam dignissimos ut est debitis et rerum doloribus quos!'
        },
        {
            title: 'Vencendo o medo de crescer no mercado digital',
            thumabnail: 'https://i.pinimg.com/564x/cf/73/4e/cf734edc33b7ec1c0ff9d2093a5d42b3.jpg',

            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi vitae! Pariatur, facilis quaerat optio sequi nostrum veritatis aperiam cum non quisquam dignissimos ut est debitis et rerum doloribus quos!'
        },
        {
            title: 'Vencendo o medo de crescer no mercado digital',
            thumabnail: 'https://i.pinimg.com/originals/43/aa/60/43aa605fbc768e5907c1f5a9ab341b92.jpg',

            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi vitae! Pariatur, facilis quaerat optio sequi nostrum veritatis aperiam cum non quisquam dignissimos ut est debitis et rerum doloribus quos!'
        },
        {
            title: 'Como ter um posicionamento mestre no digital',

            thumabnail: 'https://i.pinimg.com/originals/43/aa/60/43aa605fbc768e5907c1f5a9ab341b92.jpg',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi vitae! Pariatur, facilis quaerat optio sequi nostrum veritatis aperiam cum non quisquam dignissimos ut est debitis et rerum doloribus quos!'

        },
        {
            title: 'Como ter um posicionamento mestre no digital',

            thumabnail: 'https://i.pinimg.com/originals/43/aa/60/43aa605fbc768e5907c1f5a9ab341b92.jpg',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi vitae! Pariatur, facilis quaerat optio sequi nostrum veritatis aperiam cum non quisquam dignissimos ut est debitis et rerum doloribus quos!'

        }


        ]
    }]
}


]
export default function Details() {
    return (
        <Flex

            flexDir='column'

        >
            <Header />
            <Flex height={['10rem', '15rem', '20rem', '25rem']} w='100%'>
                <Flex

                    height='100%'
                    w='100%'
                    backgroundImage={`url(${courseDetails.thumbnail})`}
                    backgroundSize='cover'
                    backgroundRepeat={'no-repeat'}

                >
                    <Flex
                        px={['2','5', '10', '12']}
                        justify='center'
                        flexDir='column'
                        height='100%'
                        w='100%'
                        background={'linear-gradient(0deg,#0f1116 0,transparent 50%),linear-gradient(45.72deg,#0f1116 8.71%,rgba(15,17,22,0) 72.99%)'}
                    >



                    </Flex>
                </Flex>
            </Flex>
            <Box px={['2','5', '10', '12']} mb='20'>
                <Flex align='center' gridGap='20px'>
                    <CircularProgress value={40} color='purple.700' trackColor="gray.500" size={['40px', '60px']}>
                        <CircularProgressLabel color='white.900' fontWeight='bold' >40%</CircularProgressLabel>
                    </CircularProgress>
                    <Text
                        color='white.900'
                        fontSize={['md', 'lg', 'xl', 'xl']}
                        fontWeight='semibold'>
                        Em andamento</Text>
                </Flex>
                <Flex flexDir='column' mb='100px'>
                    {
                        courseData.map((item) => (
                            <Text
                                color='white.900'
                                fontWeight='bold'
                                fontSize={['2xl', '3xl', '5xl', '6xl']}

                            >
                                {item.title}
                            </Text>
                        ))
                    }

                    <Flex mt='10' align='center' gridGap='15'>
                        <ButtonComponent
                            width={['180px',"250px"]}
                            bg="white.900"
                            color='black'
                            hoverBg='purple.700'
                            hoverColor='white.900'
                            borderColor="transparent"

                        >
                            <Text fontWeight='bold' fontSize='lg' mr='5px'>Assistir</Text>

                            <Icon as={BsFillPlayFill} />
                        </ButtonComponent>
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

                    </Flex>
                </Flex>

                <Grid w='100%' gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}>
                    <ResumeCoursesCard
                        icon={BiTimeFive}
                        count={3}
                        title='Horas de aula'
                    />
                    <ResumeCoursesCard
                        icon={FiLayers}
                        count={3}
                        title='Horas de aula'
                    />
                    <ResumeCoursesCard
                        icon={BsFolderFill}
                        count={3}
                        title='Horas de aula'
                    />
                    <ResumeCoursesCard
                        icon={TbCertificate}
                        count={3}
                        title='Horas de aula'
                    />
                </Grid>

                <Flex mt='100px' justifyContent='space-between'  flexWrap='wrap'  w='100%'>
                    <Stack maxW={['600px','600px','600px','600px','800px','1000px']}  w='100%'>
                        <Text                    
                            fontSize={['md', 'lg', 'xl', '2xl']}
                            fontWeight='bold'
                            color='white.900'
                            maxW='768px'
                        >Sobre</Text>
                        {courseData.map(item => (
                            <Text
                                fontSize={['sm','md', 'lg']}
                                opacity='0.8'
                                color='white.900'
                                maxW='768px'
                            >
                                {item.about}
                            </Text>
                        ))}

                        <VStack pt='100px' gridGap='30px'>
                            <Flex align='center' gridGap='15px' w='100%'>
                                <Icon
                                    color='white.900'
                                    as={FiLayers}
                                    fontSize={['md', 'lg', 'xl', '2xl']}
                                />
                                <Text
                                   fontSize={['md', 'lg', 'xl', '2xl']}
                                    fontWeight='bold'
                                    color='white.900'
                                    maxW='768px'
                                >Aulas</Text>
                            </Flex>
                            {
                                courseData.map((item) =>
                                    item.lessons.map((lesson, i) => (
                                        <LessonCard
                                            key={i}
                                            duration={lesson.duration}
                                            lessonDescription={lesson.lessonDescription}
                                            lessonNumber={lesson.lessonNumber}
                                            lessonTitle={lesson.lessonTitle}
                                            thumbnail={lesson.thumbnail}
                                        />
                                    ))
                                )
                            }
                        </VStack>
                    </Stack>
                    <Flex flexDir='column' gridGap='30px' width='100%' maxW={{ sm: '100%', md: '100%', lg: '300px',xl:'400px' }}>
                        <Tags />
                        <Flex align='center' gridGap='15px' w='100%'>
                            <Icon
                                color='white.900'
                                as={FiLayers}
                                fontSize='2xl'
                            />
                            <Text
                               fontSize={['md', 'lg', 'xl', '2xl']}
                                fontWeight='bold'
                                color='white.900'
                                maxW='768px'
                            >Material Complementar
                            </Text>
                        </Flex>
                        {
                            courseData.map((item) =>
                                item.materials.map((material) => (
                                    <ComplementaryMaterial
                                        title={material.title}
                                        url={material.url}
                                    />
                                ))
                            )
                        }
                        <Card
                            cardTitle="Conquiste seu certificado!"
                            iconCard={TbCertificate}
                            icon={TbCertificate}
                            title='Certificado'
                            description="Após concluir todas as aulas da Staageclass você receberá seu certificado de conclusão."
                        />
                        <Card
                            cardTitle="Avalie esse curso"
                            icon={AiOutlineStar}
                            title='Avaliação da Staageclass'
                            description="Após concluir todas as aulas da Overstack você poderá fazer sua avaliação do curso."
                        />
                    </Flex >
                </Flex>

            </Box>
            {
                courseData.map((item) => (
                    item.sugestions.map((sugestion) => (
                        <CoursesCarousel

                            carouselTitle={sugestion.carouselTitle}
                            data={sugestion.data}
                            icon={sugestion.icon}
                        />
                    ))
                ))
            }
        </Flex>
    )
}