import {extendTheme, layout, Theme} from '@chakra-ui/react'
import { BiPlay } from 'react-icons/bi'
import Playing from '../assets/playing.svg'
import Play from '../assets/icon-play.svg'
import Back from '../assets/back.svg'
import Forward from '../assets/forward.svg'
import Next from '../assets/next.svg'
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
                ".vjs-control-bar":{
                    alignItems:' center! important',
                    background:' linear-gradient(0deg,#000 47.02%,transparent)',
                    height: '111px !important',
                    padding:'0 15px'
                
                },
                ".vjs-progress-control":{
                    height: 'fit-content !important',
                    top: '-8px !important',
                    position:'absolute !important',
                    width:'100% !important',
                    left:0,
                    flex:'auto',
                    display:'flex',
                  
                },
                ".vjs-progress-holder":{
                    height:'8px !important',
                    borderRadius: '12px',
                    backgroundColor: '#424449 !important'
                },
               '.vjs-play-control':{
              
               },
             
               ".vjs-play-control.vjs-control.vjs-button.vjs-paused":{
                backgroundImage:`url(${Play.src})` ,
                marginRight:'3em !important',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                opacity: .7
               },
               ".vjs-play-control.vjs-control.vjs-button.vjs-paused:hover":{
               
                opacity: 1
               },
               '.vjs-play-control.vjs-playing .vjs-icon-placeholder:before':{
              display:'none'
               },
               '.video-js .vjs-play-control .vjs-icon-placeholder:before':{
                display:'none'
                 },
               '.vjs-icon-pause:before':{
                display:'none !important'
               },
               ".vjs-play-control.vjs-control.vjs-button.vjs-playing":{
                backgroundImage:`url(${Playing.src})` ,
                marginRight:'3em !important',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                opacity: .7
               },
               ".vjs-back":{
                marginRight:'3em !important',
                backgroundImage:`url(${Back.src})` ,
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                opacity: .7
               },
               ".vjs-forward":{
                marginRight:'3em !important',
                backgroundImage:`url(${Forward.src})` ,
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                opacity: .7
               },
               ".vjs-next":{
                backgroundImage:`url(${Next.src})` ,
                marginRight:'3em !important',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                opacity: .7
               },
               '.vjs-volume-control.vjs-control.vjs-volume-horizontal':{
                width: '5em',
                height: '3em',
                marginRight: '0',
               },
               '.vjs-volume-control':{
                visibility: 'visible !important',
             opacity: '1 !important',
                position: 'relative !important'
               },
               '.vjs-volume-bar.vjs-slider-horizontal': {
                display:'block',
                width: '5em',
                 height: '0.3em',
            },
            '.vjs-volume-panel':{
                width:'10em !important',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            },
            '.vjs-button > .vjs-icon-placeholder:before':{
                fontSize:'3em !important',
                position:'static'
            },
            '.spacing':{
                flex:'1 !important'
            }
            ,
            '.vjs-playback-rate-value':{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            },
            '.vjs-big-play-button':{
                backgroundImage:`url(${Play.src})` ,
                marginRight:'3em !important',
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                backgroundColor:'transparent !important',
                borderRadius:'50% !important',
                width:'86px !important',
                height:'86px !important'
               
            },
            '.video-js .vjs-big-play-button .vjs-icon-placeholder:before':{
                display:'none'
            },
            '.video-js .vjs-play-progress:before':{
                top:'0'
            }
        }
              
    
        }
    }
})