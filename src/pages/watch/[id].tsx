import { Box, Button, Flex, Icon, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { CollapseLesson } from "../../components/CollapseLesson";
import { Header } from "../../components/Header";
import { LessonTabs } from "../../components/LessonTabs";
import VideoJS from "../../components/Video";

const data=[{
    chapterTitle:'Vencendo o medo de crescer no mercado digital',
    lessonTotalCount:18,
    completedLessons:2,
    lessons:[{
      id:1,
      duration:'11:22',
      title:'Aula de JS, React seila ',
      completed:true
    },
    {
      id:2,
      duration:'11:22',
      title:'Aula asdde JS, React seila ',
      completed:false
    },
    
    {
      id:3,
      duration:'11:22',
      title:'Aasdasdoka ',
      completed:false
    },
    {
      id:4,
      duration:'11:22',
      title:'Aula de JS, Reasdaact seila ',
      completed:false
    },
    {
      id:5,
      duration:'11:22',
      title:'Aulaasdasd de JS, asda seila ', 
      completed:false
    },
  ]
}]
// http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
export default function Watch(){
    const playerRef = React.useRef(null);
    const { isOpen, onToggle } = useDisclosure()
  
    const videoJsOptions = {
      autoplay: false,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [{
        src: 'https://vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4'
      }],
     
      
    };
  
    const handlePlayerReady = (player) => {
      playerRef.current = player;
 
    };
    
    return(
      <Box w='100%' h='100%'>
      <Header/>
      <Box display='flex' pt='100px' gridGap='15px'>

        <Box 
        w={!isOpen?'70%':'100%' } 
        position='relative' 
        transition='width .3s ease-out' 
        maxH='665px' 
      
       
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
              
              <Flex w='100%'  justifyContent='space-between' align='center'>
                seta
                <Flex onClick={onToggle} justify='center' align='center'>
                <Text  color='white.200'>
                 Aulas
                </Text>
                <Icon as={ MdArrowBackIosNew} color='white.900' w='20px' h='20px'/>
                </Flex>
              </Flex>
            </Box>
           }
     
          
        </Box>
      
        <CollapseLesson 
        data={data}
        isOpen={isOpen } onToggle={onToggle}/>
   
      
        </Box>
        <Flex>
        <LessonTabs/>
        </Flex>
        </Box>
    )
}