import styles from './style.module.css'
import { useState } from 'react';

const items = [ "A", "B", "C", "D", "E", "F", "G",  "H" ]

function RadialShow() {
  const [isActive, setIsActive ] = useState(false)

  const active = () =>{
    setIsActive(!isActive)
  }

  return (
    <div className={styles.menu}>
      <div className={`${styles.center} ${isActive ? styles.center_active : ""}`} onClick={active}>+</div>
      {items.map((item, index) => (
        <div style={{"--i" : index.toString() } as any} key={index} className={`${styles.menu_item} ${isActive ? styles.menu_item_active : ""}`}>
          <a href="#">{item}</a>
        </div>
      ))}
    </div>
  );
}

export default RadialShow;
