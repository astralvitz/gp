import styles from './rsui.module.css';

// break out into multiple components: minimap, inventory, chat, mainscreen
import { Minimap } from '@/ui/minimap';
import { Inventory } from '@/ui/inventory';
import { Dialogue } from '@/ui/dialogue';
import { GameScreen } from '@/ui/gamescreen';

export function RSUI() {
  return (
    <div className={styles.frame}>
      <GameScreen />
      <Minimap />
      <Dialogue />
      <Inventory />
    </div>
  )
}
