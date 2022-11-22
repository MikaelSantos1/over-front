import { Button as ButtonChakra } from "@chakra-ui/react";

interface ButtonProps {
    children: React.ReactNode
    color?: string
    bg?: string
    hoverBg?: string
    borderColor?: string
    hoverColor?: string
    width?:string | string[]
}

export function Button({ 
    children, bg = 'transparent', 
    color = 'white.900', 
    hoverBg = 'white.900', 
    borderColor = 'white.900',
    hoverColor='black.600',
    width='200px' 
}: ButtonProps) {
    return (
        <ButtonChakra
            w={width}
            h='50px'
            bg={bg}
            borderColor={borderColor}
            borderWidth='1px'
            justifyContent='center'
            alignItems='center'
            borderRadius={0}
            color={color}
            _hover={{
                background: hoverBg,
              
                borderColor: hoverBg,
                color:hoverColor
            }}
        >
            {children}
        </ButtonChakra>
    )
}