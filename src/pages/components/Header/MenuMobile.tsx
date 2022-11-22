import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Icon
  } from '@chakra-ui/react'
  import { HamburgerIcon} from '@chakra-ui/icons'
import React, { useEffect } from 'react'
import {Header} from '.././Header'
interface MenuMobileProps{
    setIsActive:(boolean)=>void;
}

export function MenuMobile({setIsActive}:MenuMobileProps){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    useEffect(()=>{
        if(isOpen){
            setIsActive(true)
        }else{
            setIsActive(false)
        }

        
    },[isOpen])
    return(
        <>
        
      <HamburgerIcon 
      cursor='pointer'
      color='white.900'
      w='30px'
      h='30px'
      onClick={onOpen}/>
       
        <Drawer
          isOpen={isOpen}
          placement='bottom'
          onClose={onClose}
        
        closeOnOverlayClick={false}
          trapFocus={false}
        >
   
          <DrawerContent bg='gray.900' h='calc(100% - 70px)'>
            
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
             
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
}