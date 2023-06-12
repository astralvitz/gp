import Image from 'next/image';
import styles from './dialogue.module.css';

export function Dialogue() {
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
          <p className={styles.text}>Master trader since day one. You can find me slinging $gp at the GE.</p>
          <a className={styles.click} href="#">Click here to continue</a>
        </div>
      </div>
    </div>
  )
}