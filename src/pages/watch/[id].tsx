import { Box, Button, Flex, Icon, Text, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { CollapseLesson } from "../../components/CollapseLesson";
import { Header } from "../../components/Header";
import { LessonTabs } from "../../components/LessonTabs";
import { StarRating } from "../../components/StarRating";
import VideoJS from "../../components/Video";

const data = [{
  chapterTitle: 'Vencendo o medo de crescer no mercado digital',
  lessonTotalCount: 18,
  completedLessons: 2,
  lessons: [{
    id: 1,
    duration: '11:22',
    title: 'Aula de JS, React seila ',
    completed: true
  },
  {
    id: 2,
    duration: '11:22',
    title: 'Aula asdde JS, React seila ',
    completed: false
  },

  {
    id: 3,
    duration: '11:22',
    title: 'Aasdasdoka ',
    completed: false
  },
  {
    id: 4,
    duration: '11:22',
    title: 'Aula de JS, Reasdaact seila ',
    completed: false
  },
  {
    id: 5,
    duration: '11:22',
    title: 'Aulaasdasd de JS, asda seila ',
    completed: false
  },
  ]
}]
// 'https://vjs.zencdn.net/v/oceans.mp4'
//
export default function Watch() {
  const playerRef = React.useRef(null);
  const { isOpen, onToggle } = useDisclosure()

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4'
    }],


  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

  };
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  console.log(isOpen)
  return (

    <Box w='100%' h='100%'>
      <Header />
      <Flex flexWrap={!isWideVersion?'wrap' :'nowrap'}pt='100px' gridGap='25px'>

        <Box
          w={!isOpen && isWideVersion ? '70%' : '100%'}
          h='100%'
          transition='width .3s ease-out'
        >
          <Box

            position='relative'
            transition='width .3s ease-out'
            maxH='665px'
            bg='black.900'
          >
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />

            {
              isOpen &&
              <Box
                px='10'
                position='absolute'
                top='50'
                left='0'
                right='0'


                w='100%'
              >

                <Flex w='100%' justifyContent='space-between' align='center'>
                  seta
                  <Flex onClick={onToggle} justify='center' align='center'>
                    <Text color='white.200'>
                      Aulas
                    </Text>
                    <Icon as={MdArrowBackIosNew} color='white.900' w='20px' h='20px' />
                  </Flex>
                </Flex>
              </Box>
            }
          </Box>
          <Box w='100%' pl={['5', '10', '12']} mt='14'>
            <LessonTabs
              data={data}
              lessonDescription='O caminho do empreendedorismo é repleto de desafios e a cada dia é normal que surjam muitas dúvidas e dificuldades para o empreendedor. Nessa staageclass Anderson Hernandes, irá te mostrar alguns pilares essenciais para que o seu negócio comece da forma correta e se desenvolva sempre da melhor forma, você verá desde, se vale a pena ser pessoa jurídica, qual o melhor tipo de empresa para você abrir, sua responsabilidades no negócio, formação de time até organização financeira.'
            />
          </Box>



        </Box>
        <Box w='30%' h='100%'
          display={isOpen ? 'none' : 'block'}
          transition='all .3s ease-out'
          transform={isOpen ? 'translateX(100%)' : 'translateX(0)'}
        >

          {
            isWideVersion &&
            <CollapseLesson
              data={data}
              isOpen={isOpen} onToggle={onToggle} />

          }
          <Flex mt='14' gridGap='35px' flexWrap={isWideVersion ? 'nowrap' : 'wrap'}>

            <Flex

              maxH='106px'
              p='4'
              align='center'
              justify='space-between'
              w='100%'
              bg='gray.400'>
              <Text
                fontWeight='bold'
                color='white.900'
                fontSize={['lg', 'lg', 'xl', '2xl']}>
                Avalie essa aula!
              </Text>
              <StarRating />
            </Flex>
          </Flex>
        </Box>
      </Flex>


    </Box>
  )
}