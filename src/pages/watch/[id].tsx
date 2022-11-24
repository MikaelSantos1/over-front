import { Flex } from "@chakra-ui/react";
import React from "react";
import VideoJS from "../../components/Video";

export default function Watch(){
    const playerRef = React.useRef(null);

    const videoJsOptions = {
      autoplay: true,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [{
        src: 'https://www.youtube.com/watch?v=nLQ-9vfEjUI',
        type: 'video/mp4'
      }]
    };
  
    const handlePlayerReady = (player) => {
      playerRef.current = player;
  
      // You can handle player events here, for example:
      player.on('waiting', () => {
        console.log('player is waiting');
      });
  
      player.on('dispose', () => {
        console.log('player will dispose');
      });
    };
    return(
        <Flex>
           <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </Flex>
    )
}