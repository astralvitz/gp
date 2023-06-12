import Image from 'next/image';
import styles from './inventory.module.css';

export function Inventory() {
  return (
    <div className={styles.frame}>
      <div className={styles.inventory}>
        {/* todo iterate over json for images and links (follow next13playground example) */}

        <div className={styles.slot}>
          <a href="" target="_blank">
            <Image
              className=""
              src="/2147m.jpg"
              alt="placeholder"
              width={50}
              height={50}
              priority
            />
          </a>
          <span className={styles.tooltip}>Buy <span className={styles.tooltip_bold}>$gp on Uniswap</span></span>
        </div>
        <div className={styles.slot}>
          <a href="" target="_blank">
            <Image
              className=""
              src="/logo_lilgnomez.jpg"
              alt="placeholder"
              width={50}
              height={50}
              priority
            />
          </a>
          <span className={styles.tooltip}>Buy <span className={styles.tooltip_bold}>LilGnomez NFT</span></span>
        </div>
        <div className={styles.slot}>
          <a href="" target="_blank">
            <Image
              className=""
              src="/logo_twitter.jpg"
              alt="placeholder"
              width={50}
              height={50}
              priority
            />
          </a>
          <span className={styles.tooltip}>Visit <span className={styles.tooltip_bold}>Twitter</span></span>
        </div>
        <div className={styles.slot}>
          <a href="" target="_blank">
            <Image
              className=""
              src="/logo_discord.jpg"
              alt="placeholder"
              width={50}
              height={50}
              priority
            />
          </a>
          <span className={styles.tooltip}>Join <span className={styles.tooltip_bold}>Discord</span></span>
        </div>
        <div className={styles.slot}>
          <a href="" target="_blank">
            <Image
              className=""
              src="/logo_telegram.jpg"
              alt="placeholder"
              width={50}
              height={50}
              priority
            />
          </a>
          <span className={styles.tooltip}>Join <span className={styles.tooltip_bold}>Telegram</span></span>
        </div>
        <div className={styles.slot}>
          <a href="" target="_blank">
            <Image
              className=""
              src="/logo_medium.jpg"
              alt="placeholder"
              width={50}
              height={50}
              priority
            />
          </a>
          <span className={styles.tooltip}>Read <span className={styles.tooltip_bold}>Medium</span></span>
        </div>
        <div className={styles.slot}>
          <a href="" target="_blank">
            <Image
              className=""
              src="/logo_dextools.png"
              alt="placeholder"
              width={50}
              height={50}
              priority
            />
          </a>
          <span className={styles.tooltip}>See <span className={styles.tooltip_bold}>$gp on DexTools</span></span>
        </div>
      </div>
    </div>
  )
}
