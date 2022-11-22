import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import { CoursesCarousel } from "../components/CoursesCarousel";
import { Header } from "../components/Header";
import { MainCourseCarousel } from "../components/MainCourses";
import { AiFillZhihuCircle,AiOutlineFieldTime} from 'react-icons/ai'
import { CarouselRanking } from "../components/CarouselRanking";
const data = [{
  title: 'Vencendo o medo de crescer no mercado digital',
  thumabnail: 'https://i.pinimg.com/originals/43/aa/60/43aa605fbc768e5907c1f5a9ab341b92.jpg',
  progress:40,
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi vitae! Pariatur, facilis quaerat optio sequi nostrum veritatis aperiam cum non quisquam dignissimos ut est debitis et rerum doloribus quos!'
},
{
  title: 'Vencendo o medo de crescer no mercado digital',
  thumabnail: 'https://i.pinimg.com/564x/cf/73/4e/cf734edc33b7ec1c0ff9d2093a5d42b3.jpg',
  progress:90,
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi vitae! Pariatur, facilis quaerat optio sequi nostrum veritatis aperiam cum non quisquam dignissimos ut est debitis et rerum doloribus quos!'
},
{
  title: 'Vencendo o medo de crescer no mercado digital',
  thumabnail: 'https://i.pinimg.com/originals/43/aa/60/43aa605fbc768e5907c1f5a9ab341b92.jpg',
  progress:10,
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi vitae! Pariatur, facilis quaerat optio sequi nostrum veritatis aperiam cum non quisquam dignissimos ut est debitis et rerum doloribus quos!'
},



]
const data2 = [{
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
  title: 'Vencendo o medo de crescer no mercado digital',
  thumabnail: 'https://i.pinimg.com/originals/43/aa/60/43aa605fbc768e5907c1f5a9ab341b92.jpg',

  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi vitae! Pariatur, facilis quaerat optio sequi nostrum veritatis aperiam cum non quisquam dignissimos ut est debitis et rerum doloribus quos!'
},

{
  title: 'Vencendo o medo de crescer no mercado digital',
  thumabnail: 'https://i.pinimg.com/originals/43/aa/60/43aa605fbc768e5907c1f5a9ab341b92.jpg',

  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi vitae! Pariatur, facilis quaerat optio sequi nostrum veritatis aperiam cum non quisquam dignissimos ut est debitis et rerum doloribus quos!'
},

{
  title: 'Vencendo o medo de crescer no mercado digital',
  thumabnail: 'https://i.pinimg.com/originals/43/aa/60/43aa605fbc768e5907c1f5a9ab341b92.jpg',
 
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, eligendi vitae! Pariatur, facilis quaerat optio sequi nostrum veritatis aperiam cum non quisquam dignissimos ut est debitis et rerum doloribus quos!'
},




]
export default function Home() {
  return (
    <Box 
    w='100%'
    h='100%'
    overflowX='hidden'
    >
    
     <Header/>
     <MainCourseCarousel/>
    <Flex gridGap='12' flexDir='column'>
    <CoursesCarousel
    data={data}
    carouselDescription="Aprenda com grandes profissionais do mercado em cursos completos de marketing."
    carouselTitle="Visto por ultimo"
    icon={AiFillZhihuCircle}
    />
  <CarouselRanking
    carouselDescription="Aprenda com grandes profissionais do mercado em cursos completos de marketing."
    carouselTitle="Top 10"
    icon={AiOutlineFieldTime}
    />
    
    <CoursesCarousel
    data={data2}
   
    carouselTitle="Negócios e Vendas"
    icon={AiFillZhihuCircle}
    />
    </Flex>
    </Box>
  )
}
