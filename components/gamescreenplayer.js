'use client'

import React, { useRef } from 'react';
import YouTube from 'react-youtube';

export function GameScreenPlayer() {
  const opts = {
    height: '307',
    width: '503',
    playerVars: {
      autoplay: 1,
      loop: 1,
      mute: 1,
      playlist: 'QfM7JPFsG7M',
      index: 0,
    },
  };

  return <YouTube videoId="QfM7JPFsG7M" opts={opts} />;
}

// export function GameScreenPlayer() {
//   const videoRef = useRef(null);

//   const play = () => {
//     videoRef.current.play();
//   };

//   const pause = () => {
//     videoRef.current.pause();
//   };

//   return (
//     <div>
//       <video ref={videoRef} src="https://youtu.be/QfM7JPFsG7M" controls muted autoPlay loop />
//       <div>
//         <button onClick={play}>Play</button>
//         <button onClick={pause}>Pause</button>
//       </div>
//     </div>
//   );
// }
