import Image from 'next/image';

import styles from './minimap.module.css';

const images = ['/gnomebruh.gif', '/minimap_ge.jpg'];

export function Minimap() {
  let randomImage = images[Math.floor(Math.random() * images.length)];
  // let randomImage = images[Math.floor(Math.random() * images.length)] + '?t=' + Date.now();

  return (
    <div className={styles.frame}>
      <div className={styles.relativeframe}>
        <div className={styles.underlying_image}>
          <Image
            className="underlying-image"
            // src={randomImage}
            src={images[0]}
            alt="Framed Image"
            width={513}
            height={320}
            priority
          />
        </div>
        <div className={styles.frame_overlay}>
          <Image
            className="frame-overlay"
            src="/ui_minimap_transparency.png"
            alt="Frame"
            width={513}
            height={350}
            priority
          />
        </div>
      </div>
    </div>
  )
}