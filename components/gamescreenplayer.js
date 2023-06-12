'use client'

import React, { useRef } from 'react';

export function GameScreenPlayer() {
  const videoRef = useRef(null);

  const play = () => {
    videoRef.current.play();
  };

  const pause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef} src="/YGrows.mp4" muted autoPlay loop />
      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </div>
  );
}