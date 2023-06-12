import Image from 'next/image';
import styles from './inventory.module.css';

export function Inventory() {
  return (
    <div className={styles.frame}>
      {/* <a className={`${styles.musicplayer} ${styles.icon}`} href="#"><span className={styles.small_tooltip}>Play/Pause Music</span></a>
      <div className={`${styles.combat} ${styles.icon}`} href="#"><span className={styles.small_tooltip}>Planned...</span></div>
      <a className={`${styles.stats} ${styles.icon}`} href="#"><span className={styles.small_tooltip}>View DexTools</span></a>
      <a className={`${styles.quests} ${styles.icon}`} href="#"><span className={styles.small_tooltip}>Coming Soon</span></a> */}
      <div className={styles.inventory}>
        {/* todo iterate over json for images and links (follow next13playground example) */}
        <div className={styles.slot}>
          <a href="https://app.uniswap.org/#/swap?outputCurrency=0x8F8eD076e61A27DB72a5724ea0907A66fb0ddB32" target="_blank">
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
          <a href="https://twitter.com/MoneybagJames" target="_blank">
            <Image
              className=""
              src="/logo_twitter.jpg"
              alt="placeholder"
              width={50}
              height={50}
              priority
            />
          </a>
          <span className={styles.tooltip}>Follow <span className={styles.tooltip_bold}>Twitter</span></span>
        </div>
        <div className={styles.slot}>
          <a href="https://discord.gg/Fmmh7Whbzv" target="_blank">
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
          <a href="https://t.me/Tutorial_Island" target="_blank">
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
          <a href="https://medium.com/@MoneybagJames" target="_blank">
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
          <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x4fac944d2667e0b0b0fcd550da252e7000105264" target="_blank">
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
        <div className={styles.slot}>
          <a href="https://coinmarketcap.com/currencies/gold-pieces/" target="_blank">
            <Image
              className=""
              src="/logo_coinmarketcap.png"
              alt="placeholder"
              width={50}
              height={50}
              priority
            />
          </a>
          <span className={styles.tooltip}>View <span className={styles.tooltip_bold}>CoinMarketCap</span></span>
        </div>
        <div className={styles.slot}>
          <a href="https://www.coingecko.com/en/coins/gold-pieces" target="_blank">
            <Image
              className=""
              src="/logo_coingecko.png"
              alt="placeholder"
              width={50}
              height={50}
              priority
            />
          </a>
          <span className={styles.tooltip}>View <span className={styles.tooltip_bold}>CoinGecko</span></span>
        </div>
        <div className={styles.slot}>
          <a href="https://opensea.io/collection/lilgnomez" target="_blank">
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
      </div>
    </div>
  )
}
