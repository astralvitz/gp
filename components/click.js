'use client'

import { useEffect } from 'react';

export function Click() {
  useEffect(() => {
    const click = new Audio('/sfx-Low_Level_Alchemy.ogg');

    const playAudio = () => {
      click.play();
    };

    // Set up the listener
    document.addEventListener('click', playAudio);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return (
    <>
    </>
  );
}