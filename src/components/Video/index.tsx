import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import qualitySelector from 'videojs-hls-quality-selector';
import qualityLevels from 'videojs-contrib-quality-levels';
require('videojs-hls-quality-selector');
export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady } = props;

  React.useEffect(() => {

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
      const videoElement = document.createElement("video-js");

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;
      console.log(player)
      
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options.sources[0].src, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    videojs.registerPlugin('hlsQualitySelector', qualitySelector);
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
       
        player.hlsQualitySelector({ displayCurrentQuality: true });
        playerRef.current = null;
      }
    };
  }, [playerRef]);
  useEffect(() => {
    const player = playerRef.current;
    const backButton = player.getChild('ControlBar').addChild('button', {
      buttonChildExample: {
        buttonChildOption: true
      },
      className: 'vjs-back',

    },
      1);

    const forwardButton = player.getChild('ControlBar').addChild('button', {
      buttonChildExample: {
        buttonChildOption: true
      },
      className: 'vjs-forward',

    },2);
  
    const nextButton = player.getChild('ControlBar').addChild('button', {
      buttonChildExample: {
        buttonChildOption: true
      },
      className: 'vjs-next',

    },3);
   
player.getChild('ControlBar').addChild('button', {
      buttonChildExample: {
        buttonChildOption: true
      },
      className: 'spacing',

    },5);
   
   
    console.log(player.volume())

    function back() {
      player.currentTime(player.currentTime() - 10);
    }
    function forward() {
      player.currentTime(player.currentTime() + 10);
    }
    backButton.on('click', back)
    forwardButton.on('click', forward)

    videojs.registerPlugin('hlsQualitySelector', qualitySelector);
    
   
  }, [])



 

  
  return (
    <div data-vjs-player >
      <div ref={videoRef} >


      </div>

    </div>
  );
}

export default VideoJS;