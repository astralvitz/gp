import Image from 'next/image';

import styles from './minimap.module.css';

export function Minimap() {
  return (
    <div className={styles.frame}>
      {/* <div className={styles.relativeframe}>
        <div className={styles.underlying_image}>
          <Image
            className="underlying-image"
            src="/buyinggf.png"
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
      </div> */}
    </div>
  )
}