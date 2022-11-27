import {extendTheme, Theme} from '@chakra-ui/react'

export const theme= extendTheme({
    
     breakpoints: {
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
      },
      
    fontizes:{
        medium:'1rem'
    },
    colors:{
        gray:{
        "900": "#0F1116",
        "800": "#1F2029",
        "700": "#353646",
        "600": "#4B4D63",
        "500": "rgba(49,51,56,.5019607843137255)",
        "400": "rgba(32,34,39,.6)",
        "300": "#86888d",
        "250": "#202227",
        "200": "#B3B5C6",
        "100": "#86888dz",
        "50": "#EEEEF2",
        },
        white:{
            '900':"#FFFFFF",
            '200':'hsla(0,0%,100%,.7)'
        },
        purple:{
            '700':'rgb(130, 87, 230)'
        },
        black:{
            "900":'#000',
            "600":'#202227'
        }
    },
    fonts:{
        heading:'Nunito',
        body: 'Nunito',

    },
    styles:{
        global:{
            body:{
                bg:'gray.900',
                color:'black.600',
                overflowX:'hidden',
                '.video-js':{
                background:' content-box !important',
                position: 'static !important',
                height: 'auto !important'
                },
            
            },
            
              
    
        }
    }
})