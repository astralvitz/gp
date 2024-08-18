'use client'

import React, { useState, useEffect, useRef } from 'react';
import YouTube from 'react-youtube'; // Or use iframe
import styles from './LyricsDisplay.module.css';

function LyricsDisplay({ videoId }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [lyrics, setLyrics] = useState([]);
  const [currentLyric, setCurrentLyric] = useState('');
  const playerRef = useRef(null);
  const intervalRef = useRef(null);

  const handlePlayerReady = (event) => {
    playerRef.current = event.target;
  };

  const startLyricInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (playerRef.current) {
        setCurrentTime(playerRef.current.getCurrentTime());
      }
    }, 100);
  };

  const stopLyricInterval = () => {
    clearInterval(intervalRef.current);
  };

  const handleStateChange = (event) => {
    if (event.data === YouTube.PlayerState.PLAYING) {
      startLyricInterval();
    } else {
      stopLyricInterval();
    }
  };

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const response = await fetch('/lyrics_time_segments_full.srt');
        const data = await response.text();
        const parsedLyrics = parseSrt(data);
        console.log(parsedLyrics);
        setLyrics(parsedLyrics);
      } catch (error) {
        console.error('Error fetching lyrics:', error);
      }
    };

    fetchLyrics();

    return () => {
      stopLyricInterval();
    };
  }, []);

  useEffect(() => {
    const findLyric = () => {
      const currentLyricFind = lyrics.find((lyric) =>
        lyric.startTime <= currentTime && lyric.endTime >= currentTime
      );
      setCurrentLyric(currentLyricFind ? currentLyricFind.text : '');
    };

    findLyric();
  }, [currentTime, lyrics]);

  return (
    <div className={styles.videolyricsContainer}>
      <YouTube
        videoId={videoId}
        opts={{ playerVars: { autoplay: 1 } }}
        onReady={handlePlayerReady}
        onStateChange={handleStateChange}
      />
      <div className={styles.lyrics}>{currentLyric}</div>
    </div>
  );
}

export default LyricsDisplay;

function parseSrt(srtContent) {
  const lines = srtContent.trim().split('\n\n');
  return lines.map(block => {
    const [id, time, ...textLines] = block.split('\n');
    const [startTime, endTime] = time.split(' --> ').map(timeToSeconds);
    return {
      id: parseInt(id),
      startTime,
      endTime,
      text: textLines.join(' ')
    };
  });
}

function timeToSeconds(timeString) {
  const [hours, minutes, seconds] = timeString.split(':');
  return parseInt(hours) * 3600 + 
         parseInt(minutes) * 60 + 
         parseFloat(seconds.replace(',', '.'));
}
