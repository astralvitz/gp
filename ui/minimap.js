import styles from './minimap.module.css';

export function Minimap() {
  return (
    <div className={styles.box}>
      <img src="/ui_minimap_transparency.png" alt="minimap" />
    </div>
  )
}