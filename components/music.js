'use client'

import styles from './music.module.css';
import React, { useState } from 'react';

export function Music() {
  const [buttonText, setButtonText] = useState('Play Music');

  // This function will run when the button is clicked
  function playMusic() {
    // Get the music element
    const music = document.getElementById('music');

    // Check if the audio is already playing
    if (music.paused) {
      // If it's not playing, play it
      music.play();
      setButtonText('Pause Music');
    } else {
      // If it is playing, pause it
      music.pause();
      setButtonText('Play Music');
    }
  }

  return (
    <div>
      <audio autoPlay id="music">
        <source src="/song-TheTradeParade.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* When the button is clicked, call the playAudio function */}
      <button id="musicPlayer" className={styles.button} onClick={playMusic}>{buttonText}</button>
    </div>
    // <>
    //   <script>
    //   var click = new Audio("https://www.dropbox.com/s/t318u4z2z3h30x8/clickcomp.mp3?raw=1");
    //   document.onclick = function() {
    //     click.play()
    //   }
    //   </script>
    // </>
  )
}
