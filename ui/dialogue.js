import styles from './dialogue.module.css';

export function Dialogue() {
  return (
    <div className={styles.frame}>
      {/* <img src="/ui_dialogue.jpg" alt="dialogue" /> */}
      <div className={styles.box}>
        <div className={styles.image}>
          <img src="/moneybagjamespfp-transparent.png" alt="MoneyBagJames" />
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