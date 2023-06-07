import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-24">
      {/* navbar */}
      <div className="z-10 w-full max-w-5xl">
        <div className="sm:flex items-center justify-between gap-4">
          <div className="flex items-center self-center justify-center mb-4">
            <a href="https://linktr.ee/moneybag_james" className="items-center">
              <Image
                src="/gplogo-transparent.png"
                alt="GP Logo"
                width={96}
                height={96}
                priority
              />
            </a>
          </div>
          <nav className={styles.nav} aria-labelledby='site-navigation'>
            <div className={styles.row}>
              <div className={styles.item}>
                <a href="#" className={styles.borderlink}>The Story</a>
                <span className={styles.tooltip}>coming soon</span>
              </div>
              <div className={styles.item}>
                <a href="#" className={styles.borderlink}>Guides</a>
                <span className={styles.tooltip}>coming soon</span>
              </div>
              <div className={styles.item}>
                <a href="#" className={styles.borderlink}>Secrets</a>
                <span className={styles.tooltip}>coming soon</span>
              </div>
            </div>
            {/* <div className={styles.row}>
              <div className={styles.item}>
                <a href="">Guide to Crypto</a>
                <span className={styles.tooltip}>coming soon</span>
              </div>
              <div className={styles.item}>
                <a href="">Guide to Runescape</a>
                <span className={styles.tooltip}>coming soon</span>
              </div>
            </div> */}
          </nav>
        </div>

        {/* <div className="flex flex-wrap"> */}
          {/* hero w-1/2  */}
          <div className="flex flex-col items-center justify-center gap-4 mt-4">
            <h1 className="text-2xl md:text-4xl px-8 sm:px-24 md:px-36 font-semibold text-center">
              It&apos;s me, Moneybag James. Master trader since day one. You can find me slinging $gp at the GE.
            </h1>
            <div className={styles.center}>
              <Image
                className=""
                src="/moneybagjamespfp.jpg"
                alt="Moneybag James"
                width={320}
                height={320}
                priority
              />
            </div>
            <p className="text-lg md:text-2xl font-semibold text-center">
              $gp contract: 0x8F8eD076e61A27DB72a5724ea0907A66fb0ddB32
            </p>
            <nav className={styles.nav} aria-labelledby='external-navigation'>
              <div className={styles.row}>
                <div className={styles.item}>
                  <a href="https://twitter.com/MoneybagJames" className={styles.borderlink}>Twitter</a>
                </div>
                <div className={styles.item}>
                  <a href="https://discord.gg/Fmmh7Whbzv" className={styles.borderlink}>Discord</a>
                </div>
                <div className={styles.item}>
                  <a href="https://t.me/Tutorial_Island" className={styles.borderlink}>Telegram</a>
                </div>
                <div className={styles.item}>
                  <a href="https://medium.com/@MoneybagJames" className={styles.borderlink}>Medium/Blog</a>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.item}>
                  <a href="https://app.uniswap.org/#/swap?outputCurrency=0x8F8eD076e61A27DB72a5724ea0907A66fb0ddB32" className={styles.borderlink}>Uniswap</a>
                </div>
                <div className={styles.item}>
                  <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x4fac944d2667e0b0b0fcd550da252e7000105264" className={styles.borderlink}>DexTools</a>
                </div>
                <div className={styles.item}>
                  <a href="https://coinmarketcap.com/currencies/gold-pieces/" className={styles.borderlink}>CoinMarketCap</a>
                </div>
                <div className={styles.item}>
                  <a href="https://opensea.io/collection/lilgnomez" className={styles.borderlink}>lilgnomez NFTs</a>
                </div>
              </div>
            </nav>
            <h2 className="text-3xl md:text-5xl font-semibold text-center mt-96">
              something stirs beneath...
            </h2>
            <div className={styles.center}>
              <Image
                className="animate-pulse"
                src="/dragon2.jpg"
                alt="Dragon Logo"
                width={320}
                height={320}
                priority
              />
            </div>
          </div>
          {/* inventory */}
          {/* <div className="w-1/2">

          </div> */}
        {/* </div> */}
        
      </div>
    </main>
  )
}
