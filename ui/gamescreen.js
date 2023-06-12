import Image from 'next/image';
import styles from './gamescreen.module.css';
import { Music } from '@/components/music';

export function GameScreen() {
  return (
    <div className={styles.box}>
      {/* <img src="/ui_gamescreen.jpg" alt="game screen" /> */}
      <p className={styles.text}>$gp contract / 0x8F8eD076e61A27DB72a5724ea0907A66fb0ddB32</p>
      <div className={styles.screen}>
        <Image
          className="screen"
          src="/welcometothegrandexchangesmall.jpg"
          alt="game screen"
          width={513}
          height={320}
          priority
        />
      </div>
      {/* <p className={styles.text}>$gp balance / 00000000</p> */}
      <div className={styles.tells}>
        {/* <Music /> */}
      </div>
    </div>
  )
}
