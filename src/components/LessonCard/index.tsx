import { Box, Flex, HStack, Icon, Progress, Text, useBreakpointValue, VStack } from "@chakra-ui/react"
import Image from "next/image"

interface LessonCardProps {
  lessonTitle: string
  lessonDescription: string
  thumbnail: string
  duration: string
  lessonNumber: string
}
import { BiTimeFive } from 'react-icons/bi'

export function LessonCard({ lessonDescription, lessonTitle, thumbnail, duration, lessonNumber }: LessonCardProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true
  })
  return (
    <Flex w='100%' h='100%' bg='gray.400' flexDir={isWideVersion ? 'row' : 'column'} p='5'>

      <Box
        w='100%'
        h='100%'
        minH='200px'
        minW='200px'
        maxW='500px'
        position='relative'
        display='flex'
        flexDir='column'
        justifyContent='flex-end'
        flexWrap='wrap'
      >

        <Image src={thumbnail} alt='' layout="fill" />
        <Progress
          bg='gray.200'
          size='xs'
          colorScheme='purple'
          value={80}

        />
      </Box>
      <Box p={['1', '2', '4', '6', '10']}>
        <HStack gridGap='15px' justify={isWideVersion ? 'normal' : 'space-between'}>
          <Box
            px={['1px', '5px', '10px']}
            borderRadius='16px'
            bg='gray.500'
          >
            <Text

              fontWeight='bold'
              fontSize={['sm', 'md', 'lg']}
              color='white.900'
              opacity='0.8'
            >
              {lessonNumber}
            </Text>
          </Box>
          <Flex align='center' gridGap='10px' ml='25px'>
            <Icon as={BiTimeFive} color='white.900' fontSize='xl' opacity='0.8' />
            <Text
              fontWeight='bold'
              fontSize={['sm', 'md', 'lg']}
              color='white.900'
              opacity='0.8'
            >
              {duration}
            </Text>
          </Flex>
        </HStack>
        <VStack
          mt='10px'
          align='flex-start'
        >
          <Text
            textAlign='left'
            fontWeight='bold'
            fontSize={['md', 'lg', 'xl']}
            color='white.900'

          >{lessonTitle}</Text>
          {
            isWideVersion && <Text
              fontSize={['xs', 'sm', 'md']}

              color='white.900'
              opacity='0.8'
            >{lessonDescription}</Text>
          }

        </VStack>
      </Box>
    </Flex>
  )
}