'use client'

import Image from 'next/image';
import styles from './dialogue.module.css';
import React, { useState } from 'react';

const dialogue = [
  'Yo, it\'s me, Money Bag James. Master trader since day one. You can find me slinging $gp at the GE.',
  'Welcome to the new $gp site. I\'m still working on it, but I\'m excited to share it with you.',
  'Check out the Medium blog where I explain the story behind $gp and where it\'s going.',
  'Follow me on Twitter for updates on the project, and join the Telegram and Discord!',
];

export function Dialogue() {
  const [dialogueIndex, setDialogueIndex] = useState(0);

  function nextDialogue() {
    setDialogueIndex((dialogueIndex + 1) % dialogue.length);
  }

  return (
    <div className={styles.frame}>
      <div className={styles.box}>
        <div className={styles.image}>
          <Image
            src="/moneybagjamespfp-transparent.png"
            alt="MoneyBagJames"
            width={160}
            height={160}
          />
        </div>
        <div className={styles.textbox}>
          <p className={styles.name}>Money Bag James</p>
          <p className={styles.text}>{dialogue[dialogueIndex]}</p>
          <button className={styles.click} onClick={nextDialogue}>Click here to continue</button>
        </div>
      </div>
    </div>
  )
}