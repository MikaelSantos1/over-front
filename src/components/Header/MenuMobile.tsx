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
  Icon,
  Text,
  Divider,
  VStack
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import React, { useEffect } from 'react'
import { Header } from '.'
interface MenuMobileProps {
  setIsActive: (arg0: boolean) => void;
}

export function MenuMobile({ setIsActive }: MenuMobileProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  useEffect(() => {
    if (isOpen) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }


  }, [isOpen])

  return (
    <>
      {
        isOpen ?
          <CloseIcon
            cursor='pointer'
            color='white.900'
            w='20px'
            h='20px'
            onClick={!isOpen ? onOpen : onClose} />
          :
          <HamburgerIcon
            cursor='pointer'
            color='white.900'
            w='30px'
            h='30px'
            onClick={!isOpen ? onOpen : onClose} />
      }


      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}

        closeOnOverlayClick={false}

      >

        <DrawerContent bg='gray.900' h='calc(100% - 70px)' zIndex='1'>


          <Divider />

          <DrawerBody >
            <VStack align='flex-start' spacing='5'>
              <Text

                as='a'
                href='#'
                color='white.900'
                fontWeight='bold' >
                Navegue
              </Text>
              <Text
                as='a'
                href='#'
                color='white.900'
                fontWeight='bold' >
                Perfil
              </Text>
              <Text
                as='a'
                href='#'
                color='white.900'
                fontWeight='bold' >
                adas
              </Text>
              <Text
                as='a'
                href='#'
                color='white.900'
                fontWeight='bold' >
                Navegue
              </Text>
              <Text
                as='a'
                href='#'
                color='white.900'
                fontWeight='bold' >
                Navegue
              </Text>
            </VStack>
          </DrawerBody>

          <Divider />
        </DrawerContent>
      </Drawer>
    </>
  )
}