'use client'

import React, { useState, useEffect, useRef } from 'react';
import styles from './SoundCloudPlayer.module.css';

function SoundCloudPlayer({ trackUrl }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [lyrics, setLyrics] = useState([]);
  const [currentLyric, setCurrentLyric] = useState('');
  const playerRef = useRef(null);
  const widgetRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Load SoundCloud Widget
    widgetRef.current = window.SC.Widget(playerRef.current);

    widgetRef.current.bind(window.SC.Widget.Events.READY, () => {
      console.log('SoundCloud player is ready');
      widgetRef.current.bind(window.SC.Widget.Events.PLAY, startLyricInterval);
      widgetRef.current.bind(window.SC.Widget.Events.PAUSE, stopLyricInterval);
      widgetRef.current.bind(window.SC.Widget.Events.FINISH, stopLyricInterval);
    });

    // Fetch lyrics
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
      if (widgetRef.current) {
        widgetRef.current.unbind(window.SC.Widget.Events.PLAY);
        widgetRef.current.unbind(window.SC.Widget.Events.PAUSE);
        widgetRef.current.unbind(window.SC.Widget.Events.FINISH);
      }
    };
  }, []);

  const startLyricInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (widgetRef.current) {
        widgetRef.current.getPosition(position => {
          setCurrentTime(position / 1000); // Convert milliseconds to seconds
        });
      }
    }, 100);
  };

  const stopLyricInterval = () => {
    clearInterval(intervalRef.current);
  };

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
    <div className={styles.iframe}>
      <script src="https://w.soundcloud.com/player/api.js"></script>
      <iframe
        ref={playerRef}
        width="444px"
        height="84px"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
      ></iframe>
      <div className="lyrics">{currentLyric}</div>
    </div>
  );
}

export default SoundCloudPlayer;
