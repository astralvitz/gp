'use client'

import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

// Custom hook to manage video state
function useYouTubePlayer() {
  const [player, setPlayer] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (event) => {
    setPlayer(event.target);
  };

  const onStateChange = (event) => {
    setIsPlaying(event.data === YouTube.PlayerState.PLAYING);
  };

  useEffect(() => {
    if (player && isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(player.getCurrentTime());
      }, 100);
      return () => clearInterval(interval);
    }
  }, [player, isPlaying]);

  return { player, currentTime, isPlaying, onReady, onStateChange };
}

// Main component
function VideoWithLyrics({ videoId }) {
  const { currentTime, onReady, onStateChange } = useYouTubePlayer();
  const [currentLyric, setCurrentLyric] = useState('');

  // Assume lyrics is an array of objects with start time and text
  const lyrics = [
    { startTime: 0, text: "First line of lyrics" },
    { startTime: 5, text: "Second line of lyrics" },
    // ... more lyrics
  ];

  useEffect(() => {
    const currentLyricObj = lyrics.reduce((prev, curr) => 
      (curr.startTime <= currentTime) ? curr : prev
    );
    setCurrentLyric(currentLyricObj.text);
  }, [currentTime]);

  return (
    <div>
      <YouTube
        videoId={videoId}
        onReady={onReady}
        onStateChange={onStateChange}
      />
      <div>{currentLyric}</div>
    </div>
  );
}

export default VideoWithLyrics;